// import { Environment, OrbitControls } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
// import { Map3D } from './components/Map3D';
import BottomSheet from './components/BottomSheet';

const MapPage = () => {
  return (
    <div className="w-full h-full">
      {/* <Canvas>
        <Environment preset="city" />
        <OrbitControls />
        <Map3D />
      </Canvas> */}
      <BottomSheet />
      <div>지도페이지</div>
    </div>
  );
};

export default MapPage;
