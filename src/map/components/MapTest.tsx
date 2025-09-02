import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import * as THREE from 'three';

export default function Model({ url }: { url: string }) {
  const gltf = useGLTF(url);
  const { camera, scene } = useThree();

  const [originalColors] = useState(new Map<string, THREE.Color>());

  useEffect(() => {
    if (!gltf?.scene) return;

    // gltf.scene.traverse(child => {
    //   //building 이름만 들어간 오브젝트 찾아서 출력
    //   if (child.name.toLowerCase().includes('building')) {
    //     console.log('건물:', child.name);
    //   }
    // });

    //카메라 시야 프로스텀 생성
    const frustum = new THREE.Frustum();
    const projScreenMatrix = new THREE.Matrix4();

    projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(projScreenMatrix);

    gltf.scene.traverse(child => {
      if (child instanceof THREE.Mesh) {
        const visible = frustum.intersectsObject(child);
        const mat = child.material as THREE.MeshStandardMaterial;
        if (visible) {
          console.log('보이는 건물:', child.name);
        }
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} />;
}
