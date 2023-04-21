import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Football(props) {
  const { nodes, materials } = useGLTF("/models/Football.glb");

  return (
    <group {...props} dispose={null}>
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

useGLTF.preload("/models/Football.glb");
