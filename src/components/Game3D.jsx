import { Canvas, useFrame, } from '@react-three/fiber'
import { useEffect, useRef, useState, Suspense } from 'react'
import { Environment, ContactShadows } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Terrain2Model } from './models/Terrain2Model'
import { easing } from 'maath'
import '/src/styles/Game.module.css'
import { VoitureModel } from './models/VoitureModel'
import { Game } from '../Game'
import { ResetTextModel } from './models/ResetTextModel'
import { StartTextModel } from './models/StartTextModel'
import { Box, Typography, Backdrop, CircularProgress } from '@mui/material'

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

	// const [openDialog, setOpenDialog] = useState(false);

	// const handleClickOpen = () => {
	// 	setOpenDialog(true);
	// };

	// const handleClose = () => {
	// 	setOpenDialog(false);
	// };

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
			// handleClickOpen()
			window.alert("Aie, il ne faut pas tomber en dehors de la carte...")
			resetGame()
			return "out"
		} else if (!(dict[mapPos].includes(nextCell))) {
			window.alert("Oups, vous ne pouvez pas traverser les routes... Il faut suivre le trace")
			resetGame()
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
		if (myMesh.current.rotation != tempRot) {
			easing.dampE(myMesh.current.rotation, tempRot, .6, delta)
		}
		if (myMesh.current.position != tempPos) {
			easing.damp3(myMesh.current.position, tempPos, .6, delta)
		}
		if (blocks.length > 0 && !updating) {
			// console.log("start!")
			console.log(blocks)
			setUpdate(true)
			state.clock.stop()
			state.clock.start()
		}
		if (blocks.length > 0 && updating && state.clock.elapsedTime > 1.5) {
			("using tile")
			var ins = blocks[0]
			setBlocks(blocks.slice(1))
			// console.log(blocks, blocks.length)
			state.clock.stop()
			if (blocks.length == 1) {
				// console.log("no more tiles")
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
					// console.log(move)
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
		setCamRig(true)
		setBlocks([])
		setUpdate(false)
		setTempPos(voitureOffsetPos)
		setTempRot(voitureOffsetRot)
		setMapPos("02")
		setMapRot(0)
		return true
	}

	function startGame() {
		if (updating) {
			return
		}
		click(!clicked)
		resetGame()
		// console.log("startGame")
		var blocksId = document.querySelector("#blocks")
		var tempBlocks = []
		if (blocksId) {
			tempBlocks = Array.from(blocksId.children).map((elem) => {
				return elem.innerHTML
			})
		}
		// console.log(tempBlocks)
		setBlocks(tempBlocks)
		click(false)
	}

	// function Box(props) {
	// 	// This reference gives us direct access to the THREE.Mesh object
	// 	const ref = useRef()
	// 	// Hold state for hovered and clicked events
	// 	const [hovered, hover] = useState(false)
	// 	const [clicked, click] = useState(false)
	// 	// Subscribe this component to the render-loop, rotate the mesh every frame
	// 	useFrame((state, delta) => (ref.current.rotation.x += delta))
	// 	// Return the view, these are regular Threejs elements expressed in JSX
	// 	return (
	// 	  <mesh
	// 		{...props}
	// 		ref={ref}
	// 		scale={clicked ? 1.5 : 1}
	// 		onClick={(event) => click(!clicked)}
	// 		onPointerOver={(event) => hover(true)}
	// 		onPointerOut={(event) => hover(false)}>
	// 		<boxGeometry args={[1, 1, 1]} />
	// 		<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
	// 	  </mesh>
	// 	)
	//   }

	return (
		<>

			<mesh position={[-3, .3, -2]} rotation={[1.5, .3, -1.2]}
				// {...props}
				onClick={() => resetGame()}
				onPointerOut={(e) => hoverReset(false)}
				onPointerOver={(event) => hoverReset(true)}>
				<ResetTextModel position={[0, 0, -.7]} castShadow={true}/>
				<meshStandardMaterial color={hoveredReset ? 0xE7854F : 'yellow'} />
				<boxGeometry args={[.5, .5, .5]} />
			</mesh>
			<mesh position={[-3, 1.1, 1]} rotation={[1.5, .3, -1.6]}
				// {...props}
				onClick={() => startGame()}
				onPointerOut={(e) => hoverStart(false)}
				onPointerOver={(event) => hoverStart(true)}>
				<StartTextModel position={[0, 0, -.7]}/>
				<boxGeometry args={[.5, .5, .5]} />
				<meshStandardMaterial color={hoveredStart ? 0x3B70E7 : 'blue'} />
			</mesh>
			<mesh ref={myMesh}>
				<VoitureModel/>
			</mesh>
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
			body.style.background = "#2d4967";
		}	
	})

	return (
		<>
			<Suspense fallback={
					<CircularProgress color="info" size="4em" style={{position: "absolute", top: "50%", left: "50%"}} />
				}>
				<Canvas dpr={[1, 2]} eventSource={document.getElementById('root')} style={canvasStyle} camera={{ position: [cameraOffset.x, cameraOffset.y, cameraOffset.z], fov: 20}}>
					<Terrain2Model scale={1}/>
					<Voiture />
					{/* <Grid renderOrder={-1} position={[0, -1, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} /> */}
					{/* <OrbitControls autoRotate autoRotateSpeed={0.5} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} /> */}
					<EffectComposer disableNormalPass>

						<Bloom luminanceThreshold={.6} mipmapBlur luminanceSmoothing={0} intensity={.2} />
						{/* <DepthOfField target={[0, 0, 0]} focalLength={0.3} bokehScale={10} height={700} /> */}
					</EffectComposer>
					<ambientLight intensity={0.45} />
					{/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow /> */}

					{/* <Cloud scale={.1} position={[-1, 2, -3]} />
					<Cloud scale={.1} position={[2, 1.5, 2]} /> */}
					<ContactShadows position={[.2, -1.5, 0.2]} opacity={0.75} scale={10} blur={2.5} far={3} />
					<Environment preset="sunset" />
				</Canvas>
			</Suspense>
			<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
			{/* <Button sx={{margin: 2}} size="large" variant="contained" onClick={startGame} >Start</Button>
			<Button sx={{margin: 2}} size="large" variant="contained" onClick={resetGame} >Reset</Button> */}
			<Game />
			</div>
		</>
	);
}
