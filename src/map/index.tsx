import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';

import BottomSheet from '@/map/components/BottomSheet';
import Model from '@/map/components/MapTest';

const MapPage = () => {
  const modelRef = useRef<any>(null);

  return (
    <div className="w-full h-full relative">
      <Canvas
        className="absolute fixed -top-20 w-full h-full z-0"
        onContextMenu={e => e.preventDefault()}
      >
        <PerspectiveCamera makeDefault position={[-300, 1000, 1000]} fov={40} />
        <Environment preset="apartment" />
        <OrbitControls
          minDistance={80} // 카메라와 대상(lookAt)의 최소 거리
          maxDistance={1000}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={(Math.PI * 2) / 5}
        />
        <Model ref={modelRef} url="/INGLE_campus_map_0914.glb" />

        {/* 빛 */}
        <directionalLight position={[20, 10, 5]} />
        <ambientLight intensity={0.3} />
      </Canvas>

      <BottomSheet modelRef={modelRef} />
    </div>
  );
};

export default MapPage;
