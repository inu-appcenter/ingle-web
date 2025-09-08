import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

import Model from '@/map/components/MapTest';
import BottomSheet from './components/BottomSheet';

const MapPage = () => {
  const modelRef = useRef<any>(null);

  return (
    <div className="w-full h-full relative">
      <Canvas
        className=" w-full h-full absolute z-1"
        onContextMenu={e => e.preventDefault()}
      >
        <PerspectiveCamera makeDefault position={[100, 300, -250]} fov={100} />
        <Environment preset="apartment" />
        <OrbitControls
          minDistance={100} // 카메라와 대상(lookAt)의 최소 거리
          maxDistance={700}
          touches={{
            ONE: THREE.TOUCH.PAN, // 한 손 → 이동
            TWO: THREE.TOUCH.ROTATE, // 두 손 → 회전
          }}
        />
        <Model ref={modelRef} url="/INGLE_campus_map_way.glb" />

        {/* 빛 */}
        <directionalLight position={[20, 10, 5]} />
        <ambientLight intensity={0.3} />
      </Canvas>

      <BottomSheet modelRef={modelRef} />
    </div>
  );
};

export default MapPage;
