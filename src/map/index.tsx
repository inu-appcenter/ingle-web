import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import BottomSheet from './components/BottomSheet';
import Model from './components/MapTest';

const MapPage = () => {
  return (
    <div className="w-full h-full bg-black relative">
      <Canvas className=" w-full h-full">
        <PerspectiveCamera makeDefault position={[100, 280, -250]} fov={100} />
        <Environment preset="apartment" />
        <OrbitControls
          minDistance={300} // 카메라와 대상(lookAt)의 최소 거리
          maxDistance={700}
        />
        <Model url="/INGLE_campus_map2.glb" />

        {/* 빛 */}
        <directionalLight position={[20, 10, 5]} />
        <ambientLight intensity={0.3} />
      </Canvas>

      <BottomSheet />
    </div>
  );
};

export default MapPage;
