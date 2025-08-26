import { useGLTF } from '@react-three/drei';

export function Map3D(props: any) {
  const { nodes, materials } = useGLTF('/images/INGLE_campus_map.glb');

  console.log(nodes);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding004.geometry}
        //material={materials['Material.002']}
        position={[246815.047, 10.793, -77462.125]}
      >
        <meshStandardMaterial color="#ff0000" /> {/* 빨간색 */}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasleisure002.geometry}
        material={materials['Material.004']}
        position={[246649.563, 4.793, -77209.289]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding005.geometry}
        material={materials['Material.002']}
        position={[323842.188, 740.091, 14807.891]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding006.geometry}
        material={materials['Material.002']}
        position={[246809.047, 12.293, -77047.695]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding007.geometry}
        material={materials['Building white']}
        position={[246904.141, 12.293, -76948.703]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding008.geometry}
        material={materials['Material.002']}
        position={[246927.641, 12.293, -77599.219]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding009.geometry}
        material={materials['Material.002']}
        position={[247020.391, 19.176, -77502.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding010.geometry}
        material={materials['Material.002']}
        position={[246836.109, 10.793, -77501.109]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding011.geometry}
        material={materials['Material.002']}
        position={[246792.547, 10.793, -77422.156]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding012.geometry}
        material={materials['Material.002']}
        position={[246695.984, 10.793, -77164.984]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding013.geometry}
        material={materials['Material.002']}
        position={[246856.781, 13.793, -77406.805]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding014.geometry}
        material={materials['Material.002']}
        position={[247043.969, 10.793, -77349.078]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding015.geometry}
        material={materials['Material.002']}
        position={[247128.438, 12.293, -77459.773]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding016.geometry}
        material={materials['Material.002']}
        position={[246781.281, 10.793, -77291.125]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding017.geometry}
        material={materials['Material.002']}
        position={[246962.938, 10.793, -77241.102]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding018.geometry}
        material={materials['Material.002']}
        position={[246962.891, 7.793, -77552.508]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding019.geometry}
        material={materials['Material.002']}
        position={[246767.563, 7.793, -77702.352]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding020.geometry}
        material={materials['Material.002']}
        position={[246457.625, 10.793, -77254.992]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding021.geometry}
        material={materials['Material.002']}
        position={[246649.75, 13.793, -77242.219]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding022.geometry}
        material={materials['Material.002']}
        position={[246719.641, 13.793, -77328.93]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding023.geometry}
        material={materials['Material.002']}
        position={[246527.109, 10.793, -77200.461]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding024.geometry}
        material={materials['Material.002']}
        position={[246516.953, 10.793, -77316.953]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding025.geometry}
        material={materials['Material.002']}
        position={[246582.516, 10.793, -77382.781]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding026.geometry}
        material={materials['Material.002']}
        position={[246586.875, 9.293, -77151.438]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding027.geometry}
        material={materials['Material.002']}
        position={[246973.313, 14.793, -77540.773]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding028.geometry}
        material={materials['Material.002']}
        position={[246955.641, 14.793, -77564.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding029.geometry}
        material={materials['Material.002']}
        position={[246832.531, 13.793, -77486.227]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding030.geometry}
        material={materials['Material.002']}
        position={[246796.891, 14.793, -77439.344]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding031.geometry}
        material={materials['Material.002']}
        position={[247118.688, 9.059, -77278.625]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding058.geometry}
        material={materials['Material.002']}
        position={[246779.313, 8.086, -77382.719]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding059.geometry}
        material={materials['Material.002']}
        position={[246541.703, 14.793, -76717.891]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding060.geometry}
        material={materials['Material.002']}
        position={[246396.141, 35.941, -77151.734]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding061.geometry}
        material={materials['Material.002']}
        position={[246893.813, 12.293, -77173.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding064.geometry}
        material={materials['Material.002']}
        position={[247227.781, 14.793, -77103.406]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding065.geometry}
        material={materials['Material.002']}
        position={[246697.453, 14.793, -77631.188]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding066.geometry}
        material={materials['Material.002']}
        position={[246437.703, 35.941, -77036.469]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding067.geometry}
        material={materials['Material.002']}
        position={[246485.016, 35.941, -77092.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding068.geometry}
        material={materials['Material.002']}
        position={[246677.766, 14.793, -76959.375]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding069.geometry}
        material={materials['Material.002']}
        position={[246646.25, 14.793, -76996.836]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding070.geometry}
        material={materials['Material.002']}
        position={[246705.313, 12.293, -76933.086]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding071.geometry}
        material={materials['Material.002']}
        position={[246693.266, 14.793, -76937.336]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding072.geometry}
        material={materials['Material.002']}
        position={[246638.625, 13.793, -76887.289]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding073.geometry}
        material={materials['Material.002']}
        position={[246809.266, 13.793, -76810.945]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding074.geometry}
        material={materials['Material.002']}
        position={[246839.688, 10.793, -76847.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding075.geometry}
        material={materials['Material.002']}
        position={[246721.75, 6.293, -76857.305]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding076.geometry}
        material={materials['Material.002']}
        position={[246837.422, 14.793, -76817.336]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding077.geometry}
        material={materials['Material.002']}
        position={[246970.203, 7.232, -77075.711]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding078.geometry}
        material={materials['Material.002']}
        position={[246985.703, 7.232, -77062.086]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding079.geometry}
        material={materials['Material.002']}
        position={[246983.172, 7.232, -77084.961]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding080.geometry}
        material={materials['Material.002']}
        position={[246995.328, 7.232, -77086.063]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding081.geometry}
        material={materials['Material.002']}
        position={[247005.766, 7.232, -77071.836]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding082.geometry}
        material={materials['Material.002']}
        position={[246998.953, 7.232, -77051.977]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding083.geometry}
        material={materials['Material.002']}
        position={[247261.516, 12.293, -77170.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding084.geometry}
        material={materials['Material.002']}
        position={[246447.828, 6.696, -77162.953]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding085.geometry}
        material={materials['Material.002']}
        position={[247182, 9.276, -77271.867]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding089.geometry}
        material={materials['Material.002']}
        position={[271709.969, 14049.17, 14996]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding091.geometry}
        material={materials['Material.002']}
        position={[271733.281, 14052.179, 15040.648]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Areasbuilding088.geometry}
        material={materials['Material.002']}
        position={[323842.188, 740.091, 14807.891]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grid.geometry}
        material={nodes.Grid.material}
        position={[246448.156, 7.156, -77163.883]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Material.008']}
        position={[213120.188, 14267.374, 4542.727]}
        rotation={[Math.PI, -0.93, Math.PI]}
        scale={[56.132, 0.56, 56.132]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.010']}
        position={[275771.688, -5858.63, 28785.379]}
        scale={[89.98, 0.954, 90.84]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.011']}
        scale={[0.322, 1.419, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.010']}
        position={[276288.25, -9403.333, 34068.883]}
        scale={[89.98, 0.954, 90.84]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.010']}
        position={[273627.156, -10944.528, 29612.77]}
        scale={[89.98, 0.954, 90.84]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Material.010']}
        position={[273690, -10713.341, 29494.086]}
        scale={[89.98, 0.954, 90.84]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials['Material.011']}
        position={[-139.425, -0.114, -10.152]}
        scale={[0.322, 1.419, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.012']}
        position={[162, 12, -234]}
        rotation={[0, -0.888, 0]}
        scale={[2, 12, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_observatory.geometry}
        material={materials['Material.015']}
        position={[342.696, 20.415, -105.391]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-8, -20.341, -8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials['Material.013']}
        position={[-323.006, 278.143, 829.242]}
        rotation={[-3.093, 0.644, 3.109]}
        scale={[396.401, 7.928, 396.401]}
      />
    </group>
  );
}

useGLTF.preload('/images/INGLE_campus_map.glb');
