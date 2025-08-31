import { useGLTF } from '@react-three/drei';
import { useState } from 'react';
import * as THREE from 'three';

export default function Model({ url }: { url: string }) {
  const { scene, nodes, materials } = useGLTF(url);
  const [selectedGroup, setSelectedGroup] = useState<THREE.Group | null>(null);

  const buildingGroup = new THREE.Group();
  buildingGroup.name = 'BuildingsGroup';

  // const handleClick = (e: any) => {
  //   e.stopPropagation(); // 이벤트 버블링 방지

  //   // 이전에 선택된 메쉬가 있다면 원래 색으로 되돌리기
  //   if (selectedGroup && selectedGroup !== buildingGroup) {
  //     selectedGroup.traverse(child => {
  //       if ((child as THREE.Mesh).isMesh) {
  //         ((child as THREE.Mesh).material as THREE.MeshStandardMaterial).color.set(
  //           'white',
  //         );
  //       }
  //     });
  //   }

  //   // 새로운 그룹 색상 변경
  //   buildingGroup.traverse(child => {
  //     if ((child as THREE.Mesh).isMesh) {
  //       ((child as THREE.Mesh).material as THREE.MeshStandardMaterial).color.set(
  //         'orange',
  //       );
  //     }
  //   });

  //   setSelectedGroup(buildingGroup);
  // };

  // useEffect(() => {
  //   if (!scene) return;

  //   scene.traverse(node => {
  //     if ((node as THREE.Mesh).isMesh && node.name.includes('building')) {
  //       buildingGroup.add(node);
  //     }
  //   });
  //   scene.add(buildingGroup);

  //   //디버깅
  //   scene.traverse(child => {
  //     console.log(child);
  //     if ((child as THREE.Mesh).isMesh) {
  //       const mesh = child as THREE.Mesh;
  //       console.log('Mesh 이름:', mesh.name);
  //     }
  //   });
  // }, [scene]);

  return <primitive object={scene} />;
}
