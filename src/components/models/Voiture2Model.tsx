/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import voiture2 from "/src/assets/models/voiture2.glb?url"

type GLTFResult = GLTF & {
  nodes: {
    Pick_Up_3D_Illustration: THREE.Mesh;
    Front_Fog_Lamp: THREE.Mesh;
    Front_Bumper: THREE.Mesh;
    Head_Lamp: THREE.Mesh;
    Offer_Fender: THREE.Mesh;
    Trunk: THREE.Mesh;
    Rear_Light: THREE.Mesh;
    Mirror: THREE.Mesh;
    Slider_: THREE.Mesh;
    Wheels: THREE.Mesh;
  };
  materials: {
    ["Pick Up 3D Illustration"]: THREE.MeshStandardMaterial;
  };
};

export function Voiture2Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(voiture2) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pick_Up_3D_Illustration.geometry}
        material={materials["Pick Up 3D Illustration"]}
        scale={0.22}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Front_Fog_Lamp.geometry}
          material={materials["Pick Up 3D Illustration"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Front_Bumper.geometry}
          material={materials["Pick Up 3D Illustration"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Head_Lamp.geometry}
          material={materials["Pick Up 3D Illustration"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Offer_Fender.geometry}
          material={materials["Pick Up 3D Illustration"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trunk.geometry}
          material={materials["Pick Up 3D Illustration"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rear_Light.geometry}
          material={materials["Pick Up 3D Illustration"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mirror.geometry}
          material={materials["Pick Up 3D Illustration"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Slider_.geometry}
          material={materials["Pick Up 3D Illustration"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wheels.geometry}
          material={materials["Pick Up 3D Illustration"]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(voiture2);
