import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import * as THREE from 'three';

const Model = forwardRef(({ url }: { url: string }, ref) => {
  const gltf = useGLTF(url);
  const { camera, scene } = useThree();
  const raycaster = useRef(new THREE.Raycaster()).current;
  const originalColors = useRef(new Map<THREE.Mesh, THREE.Color>());

  const mouse = new THREE.Vector2();

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
        originalColors.current.set(
          child,
          (child.material as THREE.MeshStandardMaterial).color.clone(),
        );
      }
    });
  }

  const castRays = () => {
    if (!gltf?.scene || printed) return;

    //보이는 건물 저장
    const visibleBuildings = new Set<THREE.Mesh>();

    //화면 전체를 10*20 grid로 샘플림
    const rows = 20;
    const cols = 10;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        // 화면 좌표 NDC (-1 ~ 1)
        const x = (i / (cols - 1)) * 2 - 1;
        const y = (j / (rows - 1)) * 2 - 1;
        //raycaster 설정
        const mouse = new THREE.Vector2(x, y);
        raycaster.setFromCamera(mouse, camera);
        //레이와 mesh 충돌 검사
        const intersects = raycaster.intersectObjects(gltf.scene.children, true);
        if (intersects.length > 0) {
          const hit = intersects[0].object;
          if (hit instanceof THREE.Mesh && hit.name.toLowerCase().includes('building')) {
            visibleBuildings.add(hit);
          }
        }
      }
    }

    // 색상 변경 (보이는 건물만 빨간색)
    gltf.scene.traverse(child => {
      if (child instanceof THREE.Mesh && child.name.toLowerCase().includes('building')) {
        const mat = child.material as THREE.MeshStandardMaterial;
        if (visibleBuildings.has(child)) {
          mat.color.set('red');
        } else {
          mat.color.copy(originalColors.current.get(child)!);
        }
      }
    });

    console.log(
      '화면에 보이는 건물:',
      Array.from(visibleBuildings).map(b => b.name),
    );

    // if (visibleBuildings.size > 0) {
    //   console.log('뷰포트에서 보이는 건물 ID 목록:', [...new Set(visibleBuildings)]);
    //   setPrinted(true); // 처음 한 번만 출력
    // }
  };

  // useEffect(() => {
  //   if (!gltf?.scene) return;

  //   // gltf.scene.traverse(child => {
  //   //   //building 이름만 들어간 오브젝트 찾아서 출력
  //   //   if (child.name.toLowerCase().includes('building')) {
  //   //     console.log('건물:', child.name);
  //   //   }
  //   // });

  //   //카메라 시야 프로스텀 생성
  //   const frustum = new THREE.Frustum();
  //   const projScreenMatrix = new THREE.Matrix4();

  //   projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
  //   frustum.setFromProjectionMatrix(projScreenMatrix);

  //   gltf.scene.traverse(child => {
  //     if (child instanceof THREE.Mesh) {
  //       const visible = frustum.intersectsObject(child);
  //       const mat = child.material as THREE.MeshStandardMaterial;
  //       if (visible) {
  //         //console.log('보이는 건물:', child.name);
  //       }
  //     }
  //   });
  // }, [gltf]);

  // 외부 ref에서 castRays 호출 가능
  useImperativeHandle(ref, () => ({
    castRays,
  }));

  return <primitive object={gltf.scene} />;
});

export default Model;
