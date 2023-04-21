import React, { useRef } from "react";
import { Cylinder, useGLTF } from "@react-three/drei";

function FootballObject(props) {
    console.log("props ", props)
  const { nodes, materials } = useGLTF("/models/Football.glb");

//   <group position={[ 8, .5, -7 ]} scale={[ .2, .2, .2 ]} {...props} dispose={null}></group>
  return (
    <group
        scale={[ .2, .2, .2 ]}
        position-y={1.5}
        dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Football_Sphere002_1.geometry}
        material={materials["795548"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Football_Sphere002_1_1.geometry}
        material={materials.FFFFFF}
      />
    </group>
  );
}

export default function Football() {

    return (
        <group position={[ 7, -3, -7 ]}>
        {/* // <group position={[ 8, -3, -7 ]}> */}

            <Cylinder args={[ 2, 2, 1 ]}>
                <FootballObject />
            </Cylinder>

        </group>
    )
    // before fogging
    return (
        <group position={[ 8, -3.5, -9 ]}>

            <Cylinder args={[ 2, 2, 1 ]}>
                <FootballObject />
            </Cylinder>

        </group>
    )
}

useGLTF.preload("/models/Football.glb");
