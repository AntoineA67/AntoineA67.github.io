// export const voiture:string = "src/assets/models/voiture.glb"
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import voiture from "/src/assets/models/voiture.glb?url"


type GLTFResult = GLTF & {
  nodes: {
    Pick_Up_3D_Illustration: THREE.Mesh;
    Front_Bumper: THREE.Mesh;
    Front_Fog_Lamp: THREE.Mesh;
    Head_Lamp: THREE.Mesh;
    Mirror: THREE.Mesh;
    Offer_Fender: THREE.Mesh;
    Rear_Light: THREE.Mesh;
    Slider_: THREE.Mesh;
    Trunk: THREE.Mesh;
    Wheels: THREE.Mesh;
  };
  materials: {
    ["Pick Up 3D Illustration"]: THREE.MeshStandardMaterial;
  };
};

export function VoitureModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(voiture) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pick_Up_3D_Illustration.geometry}
        material={materials["Pick Up 3D Illustration"]}
        position={[0.56, -0.15, 1.53]}
        rotation={[0, -0.78, 0]}
        scale={0.22}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Front_Bumper.geometry}
          material={materials["Pick Up 3D Illustration"]}
          position={[0, 0.4, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Front_Fog_Lamp.geometry}
          material={materials["Pick Up 3D Illustration"]}
          position={[0.66, 0.74, 2.03]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Head_Lamp.geometry}
          material={materials["Pick Up 3D Illustration"]}
          position={[0.66, 0.96, 2.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mirror.geometry}
          material={materials["Pick Up 3D Illustration"]}
          position={[1, 1.45, 1.72]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Offer_Fender.geometry}
          material={materials["Pick Up 3D Illustration"]}
          position={[0, 0.4, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rear_Light.geometry}
          material={materials["Pick Up 3D Illustration"]}
          position={[0.75, 0.79, -1.99]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Slider_.geometry}
          material={materials["Pick Up 3D Illustration"]}
          position={[0.83, 0.87, -0.81]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trunk.geometry}
          material={materials["Pick Up 3D Illustration"]}
          position={[0, 0.4, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wheels.geometry}
          material={materials["Pick Up 3D Illustration"]}
          position={[0.82, 0.4, 1.21]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(voiture);
