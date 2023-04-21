import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Player(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/usfl_waiting.glb");
  const { actions } = useAnimations(animations, group);

  console.log(actions, "actions");
  useEffect(()=> {
    actions.GetReady.play()
  }, [])

  return (
    <group
        ref={group}
        {...props}
        scale={[ 8, 8, 8 ]}
        // scale={[ 6, 6, 6 ]}
        position-y={-4.1}
        position-z={-20}
        castShadow
        receiveShadow
        dispose={null}
    >
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig5Hips} />
          <skinnedMesh
            name="Ch38_Eyelashes"
            geometry={nodes.Ch38_Eyelashes.geometry}
            material={materials.Ch38_hair}
            skeleton={nodes.Ch38_Eyelashes.skeleton}
          />
          <skinnedMesh
            name="Ch38_Hair"
            geometry={nodes.Ch38_Hair.geometry}
            material={materials.Ch38_hair}
            skeleton={nodes.Ch38_Hair.skeleton}
          />
          <skinnedMesh
            name="Ch38_Body"
            geometry={nodes.Ch38_Body.geometry}
            material={materials.Ch38_body}
            skeleton={nodes.Ch38_Body.skeleton}
          />
          <skinnedMesh
            name="Ch38_Shirt"
            geometry={nodes.Ch38_Shirt.geometry}
            material={materials.Ch38_body}
            skeleton={nodes.Ch38_Shirt.skeleton}
          />
          <skinnedMesh
            name="Ch38_Shoes"
            geometry={nodes.Ch38_Shoes.geometry}
            material={materials.Ch38_body}
            skeleton={nodes.Ch38_Shoes.skeleton}
          />
          <skinnedMesh
            name="Ch38_Shorts"
            geometry={nodes.Ch38_Shorts.geometry}
            material={materials.Ch38_body}
            skeleton={nodes.Ch38_Shorts.skeleton}
          />
          <skinnedMesh
            name="Ch38_Socks"
            geometry={nodes.Ch38_Socks.geometry}
            material={materials.Ch38_body}
            skeleton={nodes.Ch38_Socks.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/usfl_waiting.glb");
