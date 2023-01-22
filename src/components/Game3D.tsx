import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Environment, Effects, useGLTF, Grid, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { TerrainModel } from './TerrainModel'
import { easing } from 'maath'
import '/src/styles/Game.module.css'

const canvasStyle:React.CSSProperties = {
	width: "100vw",
  	height: "100vh",
	// margin: 0,
	// overflow: "hidden",
	// position: 'absolute'
}

function Box(props: any) {
	// This reference will give us direct access to the mesh
	const mesh: any = useRef()
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)
	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => (mesh.current.rotation.x += delta))
	// Return view, these are regular three.js elements expressed in JSX
	return (
	 	<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
	  	</mesh>
	)
}

function CameraRig() {
	useFrame((state, delta) => {
	  easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta)
	  state.camera.lookAt(0, 0, 0)
	})
  }

// function Grading() {
// 	const { texture3D } = useLoader(LUTCubeLoader, 'assets/cubicle-99.CUBE')
// 	return (
// 		<Effects>
// 			<lUTPass lut={texture3D} intensity={0.75} />
// 	  	</Effects>
// 	)
// }

export default function Game3D() {
	return (
		<Canvas shadows style={canvasStyle} camera={{ position: [5, 5, 5], fov: 45 }}>
			{/* <ambientLight /> */}
			{/* <pointLight position={[10, 10, 10]} /> */}
			{/* <Box position={[-1.2, 0, 0]} />
			<Box position={[1.2, 0, 0]} /> */}
			<TerrainModel/>
			<Grid renderOrder={-1} position={[0, -1, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} />
			{/* <OrbitControls autoRotate autoRotateSpeed={0.5} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} /> */}
			<EffectComposer disableNormalPass>
				<Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={1} />
        		<DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={700} />
			</EffectComposer>
			<CameraRig />
			<Environment background preset="sunset" blur={0.8} />
		</Canvas>
	);
}

useGLTF.preload('asset/models/terrain.gltf')
