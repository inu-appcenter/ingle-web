import { useRayStore } from '@/map/stores/rayStore';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import * as THREE from 'three';

const Model = forwardRef(({ url }: { url: string }, ref) => {
  const gltf = useGLTF(url);
  const { camera, scene } = useThree();
  const raycaster = useRef(new THREE.Raycaster()).current;
  const originalColors = useRef(new Map<THREE.Mesh, THREE.Color>());
  const { setVisibleBuildings, resetVisibleBuildings } = useRayStore();

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

  const castRays = () => {
    console.log('castRays 호출');

    if (!gltf?.scene || printed) return;

    //보이는 건물 저장
    const visibleBuildings = new Set<THREE.Mesh>();

    //화면 전체를 10*20 grid로 샘플링
    const xMin = -0.7;
    const xMax = 0.7;
    const yMin = -0.15;
    const yMax = 0.8;

    const rows = 40;
    const cols = 20;

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

    const visibleNames = Array.from(visibleBuildings).map(b => b.name);
    console.log('maptest 보이는 건물:', visibleNames);
    resetVisibleBuildings();
    setVisibleBuildings(visibleNames);
    //저장하면 뭔가 다른가?
  };

  // 외부 ref에서 castRays 호출 가능
  useImperativeHandle(ref, () => ({
    castRays,
  }));

  return <primitive object={gltf.scene} />;
});

export default Model;
