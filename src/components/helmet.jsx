import React, { useRef } from "react";
import { Cylinder, useGLTF } from "@react-three/drei";

function HelmetObject(props) {
  const { nodes, materials } = useGLTF("/models/Helmet.glb");

  const { position, scale } = props

//   <group position={[ -5, 0, 5 ]} scale={[ .1, .1, .1 ]} {...props} dispose={null}>

{/* <group position={[ -8, 0, -5 ]} scale={[ .01, .01, .01 ]} dispose={null}> */}
  return (
    <group
        position={[ 0, .5, 0 ]}
        rotation-y={ -Math.PI + ( Math.PI / 4 ) }
        scale={[ .01, .01, .01 ]}
        dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.main_helmet.geometry}
        material={materials.Mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.back_soft.geometry}
        material={materials["default"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_soft.geometry}
        material={materials["default"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_soft.geometry}
        material={materials["default"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_neck.geometry}
        material={materials["default"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.side.geometry}
        material={materials["default"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_strip.geometry}
        material={materials["default"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Face_guard_holder.geometry}
        material={materials["default"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sweep.geometry}
        material={materials.White}
      />
    </group>
  );
}

export default function Helmet() {

    return (
        <group position={[ -7, -3, -7 ]}>

            <Cylinder args={[ 2, 2, 1 ]}>
                <HelmetObject />
            </Cylinder>

        </group>
    )
}

useGLTF.preload("/models/Helmet.glb");
