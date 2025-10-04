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

  function createIconGroup({
    name,
    svgPaths,
    positions,
    scale = 0.4,
    rotationX = Math.PI / 2,
  }: {
    name: string;
    svgPaths: SVGLoader.Path[];
    positions: THREE.Vector3[];
    scale?: number;
    rotationX?: number;
  }) {
    const group = new THREE.Group();
    group.name = name;
    group.visible = false;

    positions.forEach((pos, index) => {
      const itemGroup = new THREE.Group();
      itemGroup.name = `${name}_${index}`;
      itemGroup.scale.multiplyScalar(0.5);
      itemGroup.position.copy(pos);
      itemGroup.rotation.x = rotationX;
      // group.rotation.z = Math.PI / 4; //180도 회전

      svgPaths.forEach(path => {
        const material = new THREE.MeshBasicMaterial({
          color: path.color,
          side: THREE.DoubleSide,
          depthWrite: false,
        });

        const shapes = SVGLoader.createShapes(path);
        shapes.forEach((shape, shapeIndex) => {
          const geometry = new THREE.ShapeGeometry(shape);
          const mesh = new THREE.Mesh(geometry, material);

          mesh.name = `${name}_${index}_part_${shapeIndex}`;
          itemGroup.add(mesh);
        });
      });

      group.add(itemGroup);
    });

    return group;
  }

  useEffect(() => {
    if (!gltf.scene) return;

    const loader = new SVGLoader();

    //버스 아이콘
    loader.load('/bus-purple.svg', data => {
      const busPositions = [
        new THREE.Vector3(160, 5, -400), //정문(더샵마스터뷰)
        new THREE.Vector3(200, 5, -320), //정문(셀트리온방면)

        new THREE.Vector3(370, 5, 20), //자연대(공과대학 방면)
        new THREE.Vector3(350, 5, 100), //자연대(인천대정문 방면)

        new THREE.Vector3(180, 5, 260), //공과대(송도공영차고지 방면)
        new THREE.Vector3(160, 5, 350), //공과대(자연과학대학 방면)
        new THREE.Vector3(40, 5, 450), //공과대(종점 방면)

        new THREE.Vector3(-200, 5, 170), //송도캠퍼스(북문 방면)
        new THREE.Vector3(-300, 5, 140), //송도캠퍼스(얀센백신 방면)

        new THREE.Vector3(-220, 5, -390), //북문(정문 방면)
        new THREE.Vector3(-130, 5, -530), //분문(송도캠퍼스 방면)
      ];
      const busGroup = createIconGroup({
        name: 'bus_stations_group',
        svgPaths: data.paths,
        positions: busPositions,
      });
      gltf.scene.add(busGroup);
    });

    //카페 15개
    loader.load('/cafe-purple.svg', data => {
      const cafePositions = [
        new THREE.Vector3(-350, 63, 230), //카페혜윰
        new THREE.Vector3(-180, 20, 370), //미스터디유커피
        new THREE.Vector3(-260, 10, 120), //카페ing 학생회관
        new THREE.Vector3(80, 42, 0), //카페ing 학산도서관
        new THREE.Vector3(-60, 1, -100), //스낵바
        new THREE.Vector3(-160, 15, 110), //메가커피 복지회관
        // new THREE.Vector3(0, 5, 0), //카페 js
        // new THREE.Vector3(0, 5, 0), //케이슨 24
        new THREE.Vector3(-230, 10, 110), //그라찌에

        new THREE.Vector3(350, 22, 145), //이디야
        new THREE.Vector3(360, 21, 130), //컴포즈
        new THREE.Vector3(360, 23, 155), //커피화 로스터즈 2호점
        new THREE.Vector3(380, 22, 170), //수플림
        new THREE.Vector3(400, 22, 185), //매머드커피익스프레스
        new THREE.Vector3(410, 21, 195), //117 카페
      ];
      const cafeGroup = createIconGroup({
        name: 'cafe_group',
        svgPaths: data.paths,
        positions: cafePositions,
      });
      gltf.scene.add(cafeGroup);
    });

    //편의점 15개
    loader.load('/cvs-purple.svg', data => {
      const cvsPositions = [
        new THREE.Vector3(-200, 20, 360), //이마트24 생명대
        new THREE.Vector3(-390, 63, 230), //이마트24 3기숙사
        new THREE.Vector3(-350, 63, 180), //이마트24 1기숙사
        new THREE.Vector3(-400, 5, 80), //cu 인천대점(2긱)
        new THREE.Vector3(-130, 13, 65), //이마트24 복지회관
        new THREE.Vector3(-145, 20, -20), //이마트24 인문대
        new THREE.Vector3(90, 41, 10), //이마트24 도서관
        new THREE.Vector3(20, 19, -130), //이마트24 사회대
        new THREE.Vector3(250, 18, -110), //이마트24 자연대
        new THREE.Vector3(190, 18, -100), //이마트24 공대
        new THREE.Vector3(355, 23, 135), //cu 코스테이
      ];
      const cvsGroup = createIconGroup({
        name: 'cvs_group',
        svgPaths: data.paths,
        positions: cvsPositions,
      });
      gltf.scene.add(cvsGroup);
    });
    //흡연부스 7개
    loader.load('/smoking-purple.svg', data => {
      const smokingPositions = [
        new THREE.Vector3(110, 1, 125), //정보대
        new THREE.Vector3(40, 1, 250), //공대
        new THREE.Vector3(-5, 1, -18), //컨벤션센터
        new THREE.Vector3(-250, 1, 0), //농구코트1
        new THREE.Vector3(-242, 1, -10), //농구코ㄷ트2
        // new THREE.Vector3(-145, 20, -20), //1긱
        // new THREE.Vector3(90, 41, 10), //2긱

        //지도에는 있고 DB에는 없는
        new THREE.Vector3(-160, 1, -85), //인문대 뒤
        new THREE.Vector3(-65, 1, -205), //동북아 뒤
      ];
      const smokingGroup = createIconGroup({
        name: 'smoking_group',
        svgPaths: data.paths,
        positions: smokingPositions,
      });
      gltf.scene.add(smokingGroup);
    });

    scene.add(new AxesHelper(100)); // 씬 축 보기

    // const box = new THREE.Box3().setFromObject(busGroup);
    // const helper = new THREE.Box3Helper(box, 0xff0000);
    // scene.add(helper);
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

  const castRays = (category: string | null) => {
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

    //카테고리 visible 처리
    gltf.scene.traverse(child => {
      if (child instanceof THREE.Group && child.name === 'bus_stations_group') {
        child.visible = category === 'BUS_STOP';
      }
      if (child instanceof THREE.Group && child.name === 'cafe_group') {
        child.visible = category === 'CAFE';
      }
      if (child instanceof THREE.Group && child.name === 'cvs_group') {
        child.visible = category === 'CONVENIENCE_STORE';
      }
      if (child instanceof THREE.Group && child.name === 'smoking_group') {
        child.visible = category === 'SMOKING_BOOTH';
      }
    });

    // 색상 변경 (보이는 건물만)
    gltf.scene.traverse(child => {
      if (child instanceof THREE.Mesh && child.name.toLowerCase().includes('building')) {
        const mat = child.material as THREE.MeshStandardMaterial;
        if (visibleBuildings.has(child)) {
          //mat.color.set('blue');
        } else {
          mat.color.copy(originalColors.current.get(child)!);
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
