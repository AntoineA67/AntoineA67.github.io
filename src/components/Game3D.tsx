import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { FC, forwardRef, useEffect, useRef, useState } from 'react'
import { Environment, Effects, useGLTF, Grid, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { TerrainModel, model } from './models/TerrainModel'
import { easing } from 'maath'
import '/src/styles/Game.module.css'
import { VoitureModel } from './models/VoitureModel'
import { Mesh, Vector3 } from 'three'
import {Button} from '@mui/material'
import { Game } from '../Game'

const canvasStyle:React.CSSProperties = {
	width: "100vw",
  	height: "100vh",
	// opacity: 0,
	touchAction: "none"
	// margin: 0,
	// overflow: "hidden",
	// position: 'absolute'
}

// function Box(props: any) {
// 	// This reference will give us direct access to the mesh
// 	const mesh: any = useRef()
// 	// Set up state for the hovered and active state
// 	const [hovered, setHover] = useState(false)
// 	const [active, setActive] = useState(false)
// 	// Subscribe this component to the render-loop, rotate the mesh every frame
// 	useFrame((state, delta) => (mesh.current.rotation.x += delta))
// 	// Return view, these are regular three.js elements expressed in JSX
// 	return (
// 	 	<mesh
// 			{...props}
// 			ref={mesh}
// 			scale={active ? 1.5 : 1}
// 			onClick={(event) => setActive(!active)}
// 			onPointerOver={(event) => setHover(true)}
// 			onPointerOut={(event) => setHover(false)}>
// 			<boxGeometry args={[1, 1, 1]} />
// 			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
// 	  	</mesh>
// 	)
// }

const cameraOffset = {
	x: 8,
	y: 4,
	z: 0
}

const cameraRigScale = {
	x: .2,
	y: .2
}

function CameraRig() {
	useFrame((state, delta) => {
	  easing.damp3(state.camera.position, [cameraOffset.x, (state.pointer.y * state.viewport.height * cameraRigScale.y) + cameraOffset.y, (state.pointer.x * state.viewport.width * cameraRigScale.x) + cameraOffset.z], 0.5, delta)
	  state.camera.lookAt(0, 0, 0)
	//   console.log(state.camera.position)
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
		
// var voiturePos = {
// 	x: -1.3,
// 	y: .2,
// 	z: 2.6
// }

function Voiture(props: JSX.IntrinsicElements) {
	const [clicked, click] = useState(false)
	const [updating, setUpdate] = useState(false)
	const [blocks, setBlocks] = useState([])
	const [tempPos, setTempPos] = useState<[ x: number, y: number, z:number ]>([
		-1.3,
		.2,
		2.6
	])

	var tmpBlocks = []

	const myMesh:any = useRef();

	useFrame((state, delta) => {
		easing.damp3(myMesh.current.position, tempPos, .5, delta)
		if (blocks.length > 0 && !updating) {
			console.log("start!")
			setUpdate(true)
			state.clock.stop()
			state.clock.start()
		}
		if (blocks.length > 0 && updating && state.clock.elapsedTime > .8) {
			console.log("using tile")
			var ins = blocks[0]
			setBlocks(blocks.slice(1))
			console.log(blocks, blocks.length)
			state.clock.stop()
			if (blocks.length == 1) {
				console.log("no more tiles")
				setUpdate(false)
				state.clock.stop()
			}
			switch (ins) {
				case "forward":
					setTempPos([myMesh.current.position.x + 1, myMesh.current.position.y, myMesh.current.position.z - 1])
					break;
				case "left":
					setTempPos([myMesh.current.position.x - 1, myMesh.current.position.y, myMesh.current.position.z - 1])
					break;
				case "right":
					setTempPos([myMesh.current.position.x + 1, myMesh.current.position.y, myMesh.current.position.z + 1])
					break;
				
				default:
					break;
			}
			state.clock.start()
		}
	})

	function resetGame() {
		setUpdate(false)
		setTempPos([-1.3, .2, 2.6])
	}

	function startGame() {
		click(!clicked)
		resetGame()
		console.log("startGame")
		var blocksId = document.querySelector("#blocks")
		var tempBlocks:string[] = []
		if (blocksId) {
			tempBlocks = Array.from(blocksId.children).map((elem) => {
				return elem.innerHTML
			})
		}
		console.log(tempBlocks)
		setBlocks(tempBlocks)
		click(false)
	}

	return (
		<>

			<mesh position={[0, 2, 1]}
				{...props}
				onClick={(event) => resetGame()}>
				<boxGeometry args={[.5, .5, .5]}/>
				<meshStandardMaterial color={clicked ? 'red' : 'yellow'} />
			</mesh>
			<mesh position={[0, 2, -1]}
				{...props}
				onClick={(event) => startGame()}>
				<boxGeometry args={[.5, .5, .5]} />
				<meshStandardMaterial color={clicked ? 'green' : 'blue'} />
			</mesh>
			<mesh ref={myMesh}>

				<VoitureModel rotation={[0, Math.PI, 0]}/>
				{/* <VoitureModel rotation={[0, Math.PI, 0]}/> */}
			</mesh>
		</>
	)
}


export default function Game3D() {
	// const [blocks, setBlocks] = useState([])
	// const [start, setStart] = useState(false)



	// function startGame() {
	// 	console.log("startGame")
	// 	var blocks = Array.from(document.querySelector("#blocks").children).map((elem) => {
	// 		return elem.innerHTML
	// 	})
	// 	console.log(blocks)

	// 	blocks.forEach(elem => {
	// 		switch (elem) {
	// 			case "forward":
	// 				easing.damp3(voiturePos, [voiturePos.x, voiturePos.y, voiturePos.z + 2], .2)
	// 				break;
	// 			case "left":
					
	// 				break;
	// 			case "right":
					
	// 				break;
			
	// 			default:
	// 				break;
	// 		}
	// 	});
	// }
	function resetGame() {
		console.log("resetGame")
	}

	// const getBlocks = (data) => {
	// 	// console.log("getBlocks")
	// 	// console.log(data)
	// 	setBlocks(data)
	// }

	useEffect( () => {
		var html = document.querySelector('html')
		if (html) {
			html.style.overflow = "hidden"
		}
		var body = document.querySelector('body')
		if (body) {
			body.style.overflow = "hidden"
		}	
	})
	return (
		<>
			<Canvas eventSource={document.getElementById('root')} shadows style={canvasStyle} camera={{ position: [cameraOffset.x, cameraOffset.y, cameraOffset.z], fov: 45 }}>
				{/* <ambientLight /> */}
				{/* <pointLight position={[10, 10, 10]} /> */}
				{/* <Box position={[-1.2, 0, 0]} />
		<Box position={[1.2, 0, 0]} /> */}
				<TerrainModel />
				<Voiture />
				{/* {voiture} */}
				<Grid renderOrder={-1} position={[0, -1, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} />
				{/* <OrbitControls autoRotate autoRotateSpeed={0.5} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} /> */}
				<EffectComposer disableNormalPass>
					<Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={1} />
					<DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={700} />
				</EffectComposer>
				<CameraRig />
				<Environment background preset="sunset" blur={0.8} />
			</Canvas>
			<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
			{/* <Button sx={{margin: 2}} size="large" variant="contained" onClick={startGame} >Start</Button>
			<Button sx={{margin: 2}} size="large" variant="contained" onClick={resetGame} >Reset</Button> */}
			<Game />
			</div>
			{/* <Game /> */}
		</>
	);
}

useGLTF.preload(model)
