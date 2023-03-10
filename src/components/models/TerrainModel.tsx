
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

// export const model:string = "src/assets/models/terrain.gltf"
import terrain from "/src/assets/models/terrain.gltf?url"

type GLTFResult = GLTF & {
  nodes: {
    roadTile_020_1: THREE.Mesh;
    roadTile_020_2: THREE.Mesh;
    Cube019: THREE.Mesh;
    Cube019_1: THREE.Mesh;
    Cube019_2: THREE.Mesh;
    Cube019_3: THREE.Mesh;
    Cube024: THREE.Mesh;
    Cube024_1: THREE.Mesh;
    Cube024_2: THREE.Mesh;
    Cube024_3: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube004_1: THREE.Mesh;
    Cube004_2: THREE.Mesh;
    Cube004_3: THREE.Mesh;
    race_finish: THREE.Mesh;
    race_finish_poteaux: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube005_1: THREE.Mesh;
    Cube005_2: THREE.Mesh;
    Cube005_3: THREE.Mesh;
    Cube027: THREE.Mesh;
    Cube027_1: THREE.Mesh;
    Cube027_2: THREE.Mesh;
    Cube027_3: THREE.Mesh;
    Cube032: THREE.Mesh;
    Cube032_1: THREE.Mesh;
    Cube032_2: THREE.Mesh;
    Cube032_3: THREE.Mesh;
    Cube026: THREE.Mesh;
    Cube026_1: THREE.Mesh;
    Cube026_2: THREE.Mesh;
    Cube026_3: THREE.Mesh;
    Cube029: THREE.Mesh;
    Cube029_1: THREE.Mesh;
    Cube029_2: THREE.Mesh;
    Cube029_3: THREE.Mesh;
    Cube030: THREE.Mesh;
    Cube030_1: THREE.Mesh;
    Cube030_2: THREE.Mesh;
    Cube030_3: THREE.Mesh;
    Cube031: THREE.Mesh;
    Cube031_1: THREE.Mesh;
    Cube031_2: THREE.Mesh;
    Cube031_3: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube003_1: THREE.Mesh;
    Cube003_2: THREE.Mesh;
    Cube003_3: THREE.Mesh;
    Cube021: THREE.Mesh;
    Cube021_1: THREE.Mesh;
    Cube021_2: THREE.Mesh;
    Cube021_3: THREE.Mesh;
    Cube033: THREE.Mesh;
    Cube033_1: THREE.Mesh;
    Cube033_2: THREE.Mesh;
    Cube033_3: THREE.Mesh;
    Cube020: THREE.Mesh;
    Cube020_1: THREE.Mesh;
    Cube020_2: THREE.Mesh;
    Cube020_3: THREE.Mesh;
    Cube025: THREE.Mesh;
    Cube025_1: THREE.Mesh;
    Cube025_2: THREE.Mesh;
    Cube025_3: THREE.Mesh;
    Cube028: THREE.Mesh;
    Cube028_1: THREE.Mesh;
    Cube028_2: THREE.Mesh;
    Cube028_3: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube007_1: THREE.Mesh;
    Cube007_2: THREE.Mesh;
    Cube007_3: THREE.Mesh;
    race_finish001: THREE.Mesh;
    race_finish_poteaux001: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder002_1: THREE.Mesh;
  };
  materials: {
    Alternate_Dirt: THREE.MeshPhysicalMaterial;
    Grass: THREE.MeshPhysicalMaterial;
    ["Road straight.007"]: THREE.MeshStandardMaterial;
    ["Green around road"]: THREE.MeshStandardMaterial;
    ["2 around road"]: THREE.MeshStandardMaterial;
    ["3 around road"]: THREE.MeshStandardMaterial;
    ["Road finish"]: THREE.MeshStandardMaterial;
    ["race finish"]: THREE.MeshStandardMaterial;
    ["Road straight.006"]: THREE.MeshStandardMaterial;
    ["Road straight.002"]: THREE.MeshStandardMaterial;
    ["Road straight.001"]: THREE.MeshStandardMaterial;
    ["Road straight.003"]: THREE.MeshStandardMaterial;
    ["Road finish 2"]: THREE.MeshStandardMaterial;
    Flag: THREE.MeshStandardMaterial;
    checker: THREE.MeshStandardMaterial;
  };
};

export function TerrainModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(terrain) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[-2.71, -0.02, -2.08]} rotation={[0, Math.PI / 2, 0]}>
        <group
          position={[-4.41, 0.06, 1.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.43}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.roadTile_020_1.geometry}
            material={materials.Alternate_Dirt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.roadTile_020_2.geometry}
            material={materials.Grass}
          />
        </group>
        <group position={[-1.59, -0.13, 2.13]} rotation={[0, Math.PI / 4, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019.geometry}
            material={materials["Road straight.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_3.geometry}
            material={materials["3 around road"]}
          />
        </group>
        <group
          position={[-2.37, -0.13, 1.35]}
          rotation={[Math.PI, -Math.PI / 4, Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube024.geometry}
            material={materials["Road straight.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube024_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube024_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube024_3.geometry}
            material={materials["3 around road"]}
          />
        </group>
        <group
          position={[-2.37, -0.13, 4.46]}
          rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials["Road finish"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_3.geometry}
            material={materials["3 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.race_finish.geometry}
            material={materials["race finish"]}
            position={[-0.01, 0.84, -0.05]}
            rotation={[Math.PI / 2, 0, -Math.PI]}
            scale={0.21}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.race_finish_poteaux.geometry}
              material={nodes.race_finish_poteaux.material}
              position={[0, 0, 1.27]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={4.82}
            />
          </mesh>
        </group>
        <group position={[-3.14, -0.13, 0.58]} rotation={[0, Math.PI / 4, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials["Road straight.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_3.geometry}
            material={materials["3 around road"]}
          />
        </group>
        <group
          position={[-3.92, -0.13, 2.91]}
          rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027.geometry}
            material={materials["Road straight.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027_3.geometry}
            material={materials["3 around road"]}
          />
        </group>
        <group
          position={[-0.03, -0.13, 2.13]}
          rotation={[Math.PI, -Math.PI / 4, Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032.geometry}
            material={materials["Road straight.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032_3.geometry}
            material={materials["3 around road"]}
          />
        </group>
        <group position={[-2.37, -0.13, -0.2]} rotation={[0, Math.PI / 4, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026.geometry}
            material={materials["Road straight.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026_3.geometry}
            material={materials["3 around road"]}
          />
        </group>
        <group position={[-3.92, -0.13, 1.35]} rotation={[0, Math.PI / 4, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube029.geometry}
            material={materials["Road straight.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube029_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube029_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube029_3.geometry}
            material={materials["3 around road"]}
          />
        </group>
        <group position={[-4.7, -0.13, 2.13]} rotation={[0, Math.PI / 4, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030.geometry}
            material={materials["Road straight.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_3.geometry}
            material={materials["3 around road"]}
          />
        </group>
        <group position={[-3.14, -0.13, 3.69]} rotation={[0, Math.PI / 4, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube031.geometry}
            material={materials["Road straight.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube031_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube031_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube031_3.geometry}
            material={materials["3 around road"]}
          />
        </group>
        <group
          position={[-1.59, -0.13, 3.69]}
          rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials["Road straight.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_3.geometry}
            material={materials["3 around road"]}
          />
        </group>
        <group
          position={[-0.81, -0.13, 1.35]}
          rotation={[Math.PI, -Math.PI / 4, Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={materials["Road straight.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_3.geometry}
            material={materials["3 around road"]}
          />
        </group>
        <group
          position={[-2.37, -0.13, 2.91]}
          rotation={[Math.PI, -Math.PI / 4, Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033.geometry}
            material={materials["Road straight.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033_3.geometry}
            material={materials["3 around road"]}
          />
        </group>
        <group position={[-0.81, -0.13, 2.91]} rotation={[0, -Math.PI / 4, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials["Road straight.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020_3.geometry}
            material={materials["3 around road"]}
          />
        </group>
        <group position={[-1.59, -0.13, 0.58]} rotation={[0, Math.PI / 4, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025.geometry}
            material={materials["Road straight.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_3.geometry}
            material={materials["3 around road"]}
          />
        </group>
        <group position={[-3.14, -0.13, 2.13]} rotation={[0, Math.PI / 4, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028.geometry}
            material={materials["Road straight.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_3.geometry}
            material={materials["3 around road"]}
          />
        </group>
      </group>
      <group position={[-0.19, -0.34, 2.38]}>
        <group
          position={[0, 9.13, 0]}
          rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007.geometry}
            material={materials["Road finish 2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007_1.geometry}
            material={materials["Green around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007_2.geometry}
            material={materials["2 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007_3.geometry}
            material={materials["3 around road"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.race_finish001.geometry}
            material={materials["race finish"]}
            position={[-0.01, 0.84, -0.05]}
            rotation={[Math.PI / 2, 0, -Math.PI]}
            scale={0.21}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.race_finish_poteaux001.geometry}
              material={nodes.race_finish_poteaux001.material}
              position={[0, 0, 1.27]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={4.82}
            />
          </mesh>
          <group
            position={[0.34, 0.74, -0.34]}
            rotation={[Math.PI, -Math.PI / 4, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002.geometry}
              material={materials.Flag}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002_1.geometry}
              material={materials.checker}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(terrain);