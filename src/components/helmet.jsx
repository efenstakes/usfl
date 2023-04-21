import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Helmet(props) {
  const { nodes, materials } = useGLTF("/models/Helmet.glb");

  return (
    <group {...props} dispose={null}>
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

useGLTF.preload("/models/Helmet.glb");

