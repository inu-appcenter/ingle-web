import { Map3D } from '@/map/components/Map3D';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const MapPage = () => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Environment preset="city" />
        <OrbitControls />
        <Map3D />
      </Canvas>
    </div>
  );
};

export default MapPage;
