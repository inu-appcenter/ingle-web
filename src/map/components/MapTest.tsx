import { useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';
import * as THREE from 'three';

export default function Model({ url }: { url: string }) {
  const gltf = useGLTF(url);
  const [selectedMesh, setSelectedMesh] = useState<THREE.Mesh | null>(null);

  //   const handleClick = (e: any) => {
  //     e.stopPropagation(); // 이벤트 버블링 방지
  //     const clickedMesh = e.object as THREE.Mesh;

  //     // 이전에 선택된 메쉬가 있다면 원래 색으로 되돌리기
  //     if (selectedMesh && selectedMesh !== clickedMesh) {
  //       (selectedMesh.material as THREE.MeshStandardMaterial).color.set('white');
  //     }

  //     // 클릭한 메쉬 색 변경
  //     const material = clickedMesh.material as THREE.MeshStandardMaterial;
  //     material.color.set('orange');

  //     setSelectedMesh(clickedMesh);
  //   };

  useEffect(() => {
    gltf.scene.traverse(child => {
      console.log(child);
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        console.log('Mesh 이름:', mesh.name);
        console.log('재질:', mesh.material);
        console.log('geometry:', mesh.geometry);
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} />;
}
