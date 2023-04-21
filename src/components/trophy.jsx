import React, { useRef, useState } from "react";
import { Cylinder, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


export function TrophyObject(props) {
  const { nodes, materials } = useGLTF("/models/Trophy.glb");
  const [rotationY, setRotationY] = useState(0)



  useFrame(()=> {
    setRotationY(rotationY + .002)
  })

  return (
    <group
        position={[ 0, 15, -70 ]}
        scale={[ 80, 80, 80 ]}
        rotation-y={rotationY}
        dispose={null}
        castShadow
        receiveShadow
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1148787079.geometry}
        material={materials.mat17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1617515226.geometry}
        material={materials.mat17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group334481531.geometry}
        material={materials.mat17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1230591819.geometry}
        material={materials.mat12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1404036289.geometry}
        material={materials.mat19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group383699054.geometry}
        material={materials.mat19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1272488227.geometry}
        material={materials.mat19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group287719413.geometry}
        material={materials.mat20}
      />
    </group>
  );
}


export default function Trophy() {

    return (
        <group
            position={[ 0, -2, -2 ]}
        >

            <Cylinder args={[ 1, 1, 2 ]}>
                <TrophyObject />
            </Cylinder>

        </group>
    )
}


useGLTF.preload("/models/Trophy.glb");
