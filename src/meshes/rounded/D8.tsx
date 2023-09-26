/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import glb from "./d8.glb";

type GLTFResult = GLTF & {
  nodes: {
    d8: THREE.Mesh;
  };
  materials: {};
};

export const D8 = React.forwardRef<THREE.Group, JSX.IntrinsicElements["group"]>(
  ({ children, ...props }, ref) => {
    const { nodes } = useGLTF(glb) as unknown as GLTFResult;
    return (
      <group ref={ref} {...props} scale={0.1} dispose={null}>
        <group name="dice">
          <mesh name="d8" castShadow receiveShadow geometry={nodes.d8.geometry}>
            {children}
            <group
              name="008_locator_1"
              position={[0.42, 0.52, 0.43]}
              rotation={[1.11, 0.42, -0.68]}
            />
            <group
              name="008_locator_2"
              position={[-0.47, -0.46, -0.45]}
              rotation={[1.12, 0.43, 2.45]}
            />
            <group
              name="008_locator_3"
              position={[0.45, -0.46, -0.47]}
              rotation={[1.09, -0.41, -2.46]}
            />
            <group
              name="008_locator_4"
              position={[-0.43, 0.52, 0.42]}
              rotation={[1.11, -0.42, 0.69]}
            />
            <group
              name="008_locator_5"
              position={[-0.42, 0.52, -0.43]}
              rotation={[2.04, -0.42, 2.46]}
            />
            <group
              name="008_locator_6"
              position={[0.47, -0.46, 0.45]}
              rotation={[2.02, -0.43, -0.69]}
            />
            <group
              name="008_locator_7"
              position={[-0.45, -0.46, 0.47]}
              rotation={[2.05, 0.41, 0.68]}
            />
            <group
              name="008_locator_8"
              position={[0.43, 0.52, -0.42]}
              rotation={[2.03, 0.42, -2.46]}
            />
          </mesh>
        </group>
      </group>
    );
  }
);

useGLTF.preload(glb);
