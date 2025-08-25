import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import BottomSheet from './components/BottomSheet';
import { Map3D } from './components/Map3D';

const MapPage = () => {
  return (
    <div className="w-full h-full">
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <PerspectiveCamera makeDefault position={[100, 280, -250]} fov={100} />
        <Environment preset="apartment" />
        <OrbitControls
          minDistance={300} // 카메라와 대상(lookAt)의 최소 거리
          maxDistance={700}
        />

        <Map3D />

        {/* 빛 */}
        <directionalLight position={[20, 10, 5]} />
        <ambientLight intensity={0.3} />
      </Canvas>
      <BottomSheet />
      <div>지도페이지</div>
    </div>
  );
};

export default MapPage;
