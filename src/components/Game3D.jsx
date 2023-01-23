import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { FC, forwardRef, useEffect, useRef, useState } from 'react'
import { Environment, Effects, useGLTF, Grid, OrbitControls, Cloud } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { TerrainModel } from './models/TerrainModel'
import { easing } from 'maath'
import '/src/styles/Game.module.css'
import { Voiture2Model } from './models/Voiture2Model'
import { Mesh, Vector3 } from 'three'
import {Button} from '@mui/material'
import { Game } from '../Game'
import { ResetTextModel } from './models/ResetTextModel'
import { StartTextModel } from './models/StartTextModel'

const canvasStyle = {
	width: "100vw",
  	height: "100vh",
	// opacity: 0,
	touchAction: "none"
	// margin: 0,
	// overflow: "hidden",
	// position: 'absolute'
}

const cameraOffset = window.innerWidth > 600 ? {
	x: 15,
	y: 5,
	z: 0
} : {
	x: 30,
	y: 10,
	z: 4
}

const cameraRigScale = {
	x: .2,
	y: .2
}

const voitureOffsetPos = [
	-2,
	.05,
	1
]

const voitureOffsetRot = [
	0,
	3 * Math.PI / 4,
	0
]




function Voiture(props) {
	const [clicked, click] = useState(false)
	const [updating, setUpdate] = useState(false)
	const [blocks, setBlocks] = useState([])
	const [tempPos, setTempPos] = useState(voitureOffsetPos)
	const [tempRot, setTempRot] = useState(voitureOffsetRot)
	const [hoveredStart, hoverStart] = useState(false)
	const [hoveredReset, hoverReset] = useState(false)
	const [camRig, setCamRig] = useState(true)
	
	const [mapPos, setMapPos] = useState("02")
	const [mapRot, setMapRot] = useState(0)
	const dict = {
		"02": ["12"],
		"12": ["02","13", "22"],
		"13": ["12", "23"],
		"23": ["13", "33"],
		"22": ["12", "21", "32"],
		"21": ["22", "11"],
		"11": ["21", "10"],
		"10": ["11"],
		"32": ["22", "31"],
		"31": ["32", "30"],
		"30": ["31"],
		"33": ["23"]
	}

	// function CameraRig() {
	// 	useFrame((state, delta) => {
	// 		if (camRig) {
	// 			easing.damp3(state.camera.position, [cameraOffset.x, (state.pointer.y * state.viewport.height * cameraRigScale.y) + cameraOffset.y, (state.pointer.x * state.viewport.width * cameraRigScale.x) + cameraOffset.z], 0.5, delta)
	// 			state.camera.lookAt(0, 0, 0)
	// 		}
	// 	})
	// }
	const nextMove = () => {
		var nextCell = ""
		switch (mapRot) {
			case 0:
				nextCell = (Number(mapPos[0]) + 1).toString() + mapPos[1]
				break;
			case 1:
				nextCell = mapPos[0] + (Number(mapPos[1]) - 1).toString()
				break;
			case 2:
				nextCell = (Number(mapPos[0]) - 1).toString() + mapPos[1]
				break;
			case 3:
				nextCell = mapPos[0] + (Number(mapPos[1]) + 1).toString()
				break;
			default:
				break;
		}
		if (nextCell.includes("-") || nextCell.includes("4")) {
			window.alert("Out")
			return "out"
		} else if (!(dict[mapPos].includes(nextCell))) {
			window.alert("Offroadin")
			return "offroad"
		}
		if (nextCell === "30") {
			setCamRig(false)
		}
		setMapPos(nextCell)
	}


	const myMesh = useRef();

	useFrame((state, delta) => {
		if (camRig) {
			easing.damp3(state.camera.position, [cameraOffset.x, (state.pointer.y * state.viewport.height * cameraRigScale.y) + cameraOffset.y, (state.pointer.x * state.viewport.width * cameraRigScale.x) + cameraOffset.z], 0.5, delta)
			state.camera.lookAt(0, 0, 0)
		} else {
			easing.damp3(state.camera.position, [5, 1, 1])
			state.camera.lookAt(0, 0, 0)
		}

		// setTempRot([tempRot[0], tempRot[1] + 1, tempRot[2]])
		// myMesh.current.rotation.y += delta
		// myMesh.current.rotation.x += delta
		// myMesh.current.rotation.y += delta
		easing.dampE(myMesh.current.rotation, tempRot, .6, delta)
		easing.damp3(myMesh.current.position, tempPos, .6, delta)
		if (blocks.length > 0 && !updating) {
			console.log("start!")
			setUpdate(true)
			state.clock.stop()
			state.clock.start()
		}
		if (blocks.length > 0 && updating && state.clock.elapsedTime > 1.5) {
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
					setTempPos([
						(myMesh.current.position.x) - 1.1 * Math.cos(tempRot[1] - voitureOffsetRot[1] * 2),
						myMesh.current.position.y,
						(myMesh.current.position.z) + 1.1 * Math.sin(tempRot[1] - voitureOffsetRot[1] * 2)
					])
					var move = nextMove()
					console.log(move)
					break;
				case "left":
					setMapRot((mapRot + 3) % 4)
					setTempRot([tempRot[0], tempRot[1] + Math.PI / 2, tempRot[2]])
					break;
				case "right":
					setMapRot((mapRot + 1) % 4)
					setTempRot([tempRot[0], tempRot[1] - Math.PI / 2, tempRot[2]])
					break;
				
				default:
					break;
			}
			state.clock.start()
		}
	})

	function resetGame() {
		setBlocks([])
		setUpdate(false)
		setTempPos(voitureOffsetPos)
		setTempRot(voitureOffsetRot)
		setMapPos("02")
		setMapRot(0)
		return true
	}

	function startGame() {
		click(!clicked)
		resetGame()
		console.log("startGame")
		var blocksId = document.querySelector("#blocks")
		var tempBlocks = []
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

			<mesh position={[-3, .3, -2]} rotation={[1.5, .3, -1.2]}
				{...props}
				onClick={() => resetGame()}
				onPointerOut={(e) => hoverReset(false)}
				onPointerOver={(event) => hoverReset(true)}>
				<ResetTextModel position={[0, 0, -.7]} castShadow={true}/>
				<meshStandardMaterial color={hoveredReset ? 0xE7854F : 'yellow'} />
				<boxGeometry args={[.5, .5, .5]} />
			</mesh>
			<mesh position={[-3, 1.1, 1]} rotation={[1.5, .3, -1.6]}
				{...props}
				onClick={() => startGame()}
				onPointerOut={(e) => hoverStart(false)}
				onPointerOver={(event) => hoverStart(true)}>
				<StartTextModel position={[0, 0, -.7]}/>
				<boxGeometry args={[.5, .5, .5]} />
				<meshStandardMaterial color={hoveredStart ? 0x3B70E7 : 'blue'} />
			</mesh>
			<mesh ref={myMesh}>
				<Voiture2Model/>
			</mesh>
			{/* <CameraRig /> */}
		</>
	)
}


export default function Game3D() {

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
			<Canvas eventSource={document.getElementById('root')} shadows style={canvasStyle} camera={{ position: [cameraOffset.x, cameraOffset.y, cameraOffset.z], fov: 20 }}>
				<TerrainModel scale={1} />
				<Voiture />
				{/* {voiture} */}
				{/* <Grid renderOrder={-1} position={[0, -1, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} /> */}
				{/* <OrbitControls autoRotate autoRotateSpeed={0.5} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} /> */}
				<EffectComposer disableNormalPass>

					<Bloom luminanceThreshold={.6} mipmapBlur luminanceSmoothing={0.2} intensity={1} />
					<DepthOfField target={[0, 0, 0]} focalLength={0.3} bokehScale={10} height={700} />
				</EffectComposer>
				<hemisphereLight intensity={0.45} />
				<Cloud scale={.1} position={[-1, 2, -3]} />
        		<Cloud scale={.1} position={[2, 1.5, 2]} />
				<Environment background preset="forest" blur={.05} />
			</Canvas>
			<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
			{/* <Button sx={{margin: 2}} size="large" variant="contained" onClick={startGame} >Start</Button>
			<Button sx={{margin: 2}} size="large" variant="contained" onClick={resetGame} >Reset</Button> */}
			<Game />
			</div>
		</>
	);
}
