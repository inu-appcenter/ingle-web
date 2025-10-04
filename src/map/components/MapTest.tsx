import MeshToBuildingId from '@/map/constants/MeshToBuildingId';
import { useRayStore } from '@/map/stores/rayStore';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three-stdlib';
import { AxesHelper } from 'three/src/helpers/AxesHelper';

const Model = forwardRef(({ url }: { url: string }, ref) => {
  const gltf = useGLTF(url);
  const { camera, scene } = useThree();
  const raycaster = useRef(new THREE.Raycaster()).current;
  const originalColors = useRef(new Map<THREE.Mesh, THREE.Color>());
  const { setVisibleBuildings } = useRayStore();

  useEffect(() => {
    if (!gltf.scene) return;

    const loader = new SVGLoader();
    loader.load('/bus-purple.svg', data => {
      const paths = data.paths;

      //버스정류장 위치
      const busPositions = [
        new THREE.Vector3(160, 50, -400), //정문(더샵마스터뷰)
        new THREE.Vector3(200, 50, -320), //정문(셀트리온방면)

        new THREE.Vector3(370, 10, 20), //자연대(공과대학 방면)
        new THREE.Vector3(350, 10, 100), //자연대(인천대정문 방면)

        new THREE.Vector3(180, 10, 260), //공과대(송도공영차고지 방면)
        new THREE.Vector3(160, 10, 350), //공과대(자연과학대학 방면)
        new THREE.Vector3(40, 10, 450), //공과대(종점 방면)

        new THREE.Vector3(-200, 10, 170), //송도캠퍼스(북문 방면)
        new THREE.Vector3(-300, 5, 140), //송도캠퍼스(얀센백신 방면)

        new THREE.Vector3(-220, 10, -390), //북문(정문 방면)
        new THREE.Vector3(-130, 10, -530), //분문(송도캠퍼스 방면)
      ];

      const busGroup = new THREE.Group();
      busGroup.name = 'bus_stations_group';

      //버스 아이콘 추가
      busPositions.forEach((pos, index) => {
        const group = new THREE.Group();
        group.name = `bus_${index}`;
        group.scale.multiplyScalar(0.5);
        group.position.copy(pos);
        group.rotation.x = Math.PI / 2;
        // group.rotation.z = Math.PI / 4; //180도 회전

        paths.forEach(path => {
          const material = new THREE.MeshBasicMaterial({
            color: path.color,
            side: THREE.DoubleSide,
            depthWrite: false,
          });

          const shapes = SVGLoader.createShapes(path);
          shapes.forEach((shape, shapeIndex) => {
            const geometry = new THREE.ShapeGeometry(shape);
            const mesh = new THREE.Mesh(geometry, material);

            mesh.name = `bus_${index}_part_${shapeIndex}`;
            group.add(mesh);
          });
        });

        busGroup.add(group);
      });
      gltf.scene.add(busGroup);
      console.log('씬에 추가된 그룹:', gltf.scene.getObjectByName('bus_stations_group'));
      scene.add(new AxesHelper(100)); // 씬 축 보기

      // const box = new THREE.Box3().setFromObject(busGroup);
      // const helper = new THREE.Box3Helper(box, 0xff0000);
      // scene.add(helper);
    });
  }, [gltf]);

  //ray 선 그룹
  const guideGroup = useRef<THREE.Group>(new THREE.Group());

  const [printed, setPrinted] = useState(false);

  // 씬에 추가 (최초 1회)
  if (!scene.children.includes(guideGroup.current)) {
    scene.add(guideGroup.current);
  }

  if (gltf?.scene && originalColors.current.size === 0) {
    gltf.scene.traverse(child => {
      if (child instanceof THREE.Mesh && child.name.toLowerCase().includes('building')) {
        // 머티리얼을 개별 인스턴스로 복제
        child.material = (child.material as THREE.MeshStandardMaterial).clone();
        // 원래 색상 저장
        originalColors.current.set(
          child,
          (child.material as THREE.MeshStandardMaterial).color.clone(),
        );
      }
    });
  }

  const castRays = (category: string) => {
    console.log('castRays 호출');

    if (!gltf?.scene || printed) return;

    //보이는 건물 저장
    const visibleBuildings = new Set<THREE.Mesh>();

    //화면 전체를 10*20 grid로 샘플링
    const xMin = -0.7;
    const xMax = 0.7;
    const yMin = -0.15;
    const yMax = 0.8;

    const rows = 80;
    const cols = 60;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        // 화면 좌표 NDC (-1 ~ 1)
        const x = xMin + (i / (cols - 1)) * (xMax - xMin);
        const y = yMin + (j / (rows - 1)) * (yMax - yMin);
        //raycaster 설정
        const mouse = new THREE.Vector2(x, y);
        raycaster.setFromCamera(mouse, camera);
        //레이와 mesh 충돌 검사
        const intersects = raycaster.intersectObjects(gltf.scene.children, true);
        if (intersects.length > 0) {
          const hit = intersects[0].object;
          if (
            hit instanceof THREE.Mesh &&
            (hit.name.toLowerCase().includes('building') ||
              hit.name.toLowerCase().includes('smoking') ||
              hit.name.toLowerCase().includes('observatory'))
          ) {
            visibleBuildings.add(hit);
          }
        }
      }
    }

    //버스정류장 visible 처리
    gltf.scene.traverse(child => {
      if (child instanceof THREE.Group && child.name === 'bus_stations_group') {
        child.visible = category === 'BUS_STOP';
      }
    });

    // 색상 변경 (보이는 건물만)
    gltf.scene.traverse(child => {
      if (child instanceof THREE.Mesh && child.name.toLowerCase().includes('building')) {
        const mat = child.material as THREE.MeshStandardMaterial;
        if (visibleBuildings.has(child)) {
          mat.color.set('blue');
          // child.visible = false;
        } else {
          mat.color.copy(originalColors.current.get(child)!);
          // child.visible = true;
        }
      }
    });

    //mesh -> buildingid 변환
    const visibleId = Array.from(visibleBuildings)
      .flatMap(b => MeshToBuildingId[b.name])
      .sort((a, b) => a - b);
    const setVisibleId = Array.from(new Set(visibleId));

    //const visibleNames = Array.from(visibleBuildings).map(b => b.name);
    console.log('maptest 보이는 건물id:', setVisibleId);
    // 건물의 번호만 추출

    //저장
    setVisibleBuildings(setVisibleId);

    //테스트
    const current = useRayStore.getState().visibleBuildings; // 최신 값 바로 가져오기
    console.log('저장된 건물:', current);
  };

  // 외부 ref에서 castRays 호출 가능
  useImperativeHandle(ref, () => ({
    castRays,
  }));

  return <primitive object={gltf.scene} />;
});

export default Model;
