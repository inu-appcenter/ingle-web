import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function BottomSheet() {
  return (
    <div>
      <Canvas>
        <OrbitControls />
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color={'red'} />
        </mesh>
      </Canvas>
    </div>
  );
}
