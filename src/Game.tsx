import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import {
	Box,
	Button,
} from "@mui/material";
import $ from 'jquery';
import { dragContainerStyle, dropContainerStyle, dropZoneStyle, draggableStyle } from "./styles/GameStyles";
import { FC, ReactComponentElement } from "react";

gsap.registerPlugin(Draggable);

var dropContainer = $(".drop-container");
var dragContainer = $(".drag-container");

var bases = [
	$("#forward"),
	$("#left"),
	$("#right"),
	$("#f1"),
]


var dropMargin = 5;
var dropBorder = 3;
var dropZones: any[] = [];
var threshold = "50%"

const nDropZones = 10


for (let i = 0; i < bases.length; i++) {
	createDraggable(i);
}

createDropZones(10);

// var checkButton = document.querySelector("#check-button");
// checkButton.addEventListener("click", checkTiles);

function checkTiles() {
	for (var i = 0; i < dropZones.length; i++) {
		var tile = dropZones[i];
		
		if (!tile.child) {
			continue;
		}
	  console.log(tile.child.dataset.value)    
	}
}

function createDropZones(count: number) {
	
	for (var i = 0; i < count; i++) {
		// var dropZone = $(<div className="drop-zone" data-value={i}/>).appendTo(dropContainer);
		var dropZone = $(`#drop${i}`)
		dropZones.push(dropZone);
		dropZone.child = null
	}
}

// type DropZonesProps = {
// 	child: string,
// }

// const DropZonesComp: FC<DropZonesProps> = (props) => {
// 	return (
// 		.map((todo) =>
// 				<li key={todo.id}>    {todo.text}
// 				</li>
// 				);
// 	);
// }

// const DropZonesComp: FC<DropZonesProps> = (props) => {
// 	let divs = [];
// 	for (let i = 0; i < nDropZones; i++) {
// 		var dropZone = <div key={i} className="drop-zone" data-value={i} style={dropZoneStyle}/>
// 		divs.push(dropZone)

// 		dropZone = $(dropZone)

// 		dropZones.push(dropZone);
// 		dropZone.child = null
// 	}
// 	return divs
// }

function createDraggable(index: number) {

	gsap.set(bases[index], {
		x: 0,
		y: index * 206,
	})
	
	console.log("created")
	var dragTarget = bases[index].clone().appendTo(dragContainer);
	
	Draggable.create(dragTarget, {
		autoScroll: 1,
		onDragEnd: checkDropZones
	});
	
	function checkDropZonesOnlyMove(this: any) {
		var insideDropContainer = this.hitTest(dropContainer, threshold);
		
		if (!insideDropContainer) {
			dropZones[this.target.drop].child = null
			this.kill();
			this.target.remove();
			snapBack(dragTarget, index);
			return;
		}

		var dropZone = null;
		var numZones = dropZones.length;
		var i
		for (i = 0; i < numZones; i++) {
			
			// Breaks on first hit...
			if (this.hitTest(dropZones[i], threshold)) {
				dropZone = dropZones[i];
				break;
			}
		}

		if (!dropZone) {
			snapBack(dragTarget, index);
		} else {
			dropZones[this.target.drop].child = null
			this.target.drop = i
			if (dropZone.child) {
				dropZone.child.remove()
			}
			dropZone.child = this.target
			dropDraggable(dragTarget, dropZone);
		}
	}

	function checkDropZones(this: any) {
		this.target.drop = -1
		var insideDropContainer = this.hitTest(dropContainer);
		
		if (!insideDropContainer) {
			snapBack(dragTarget, index);
			return;
		}
		
		var dropZone = null;
		var numZones = dropZones.length;
		var i
		for (i = 0; i < numZones; i++) {
			
			// Breaks on first hit...
			if (this.hitTest(dropZones[i], threshold)) {
				dropZone = dropZones[i];
				break;
			}
		}
		
		if (!dropZone) {
			snapBack(dragTarget, index);
		} else {
			this.kill();
			Draggable.create(dragTarget, {
				autoScroll: 1,
				onDragEnd: checkDropZonesOnlyMove
			});
			createDraggable(index);
			this.target.drop = i
			if (dropZone.child) {
				dropZone.child.remove()
			}
			dropZone.child = this.target
			dropDraggable(dragTarget, dropZone);
		}    
	}
}

function dropDraggable(target: any, dropZone: { position: () => any; }) {
	
	var containerPos: any = dropContainer.offset();
	var currentPos = target.offset();
	var dropPos = dropZone.position();
		
	dropContainer.append(target);
		
	gsap.set(target, {
		x: currentPos.left - containerPos.left - dropBorder,
		y: currentPos.top - containerPos.top - dropBorder,
	})
	
	gsap.to(target, {
	duration: 0.1,
		x: dropPos.left + dropMargin,
		y: dropPos.top + dropMargin
	});
}

function snapBack(target: gsap.TweenTarget, index: number) {
	gsap.to(target, { duration: 0.2, x: 0, y: index * 206 });
}

export default function Game() {
	return (
		<div className="Game">

			<Button size="large"
					variant="contained"
					onClick={checkTiles}>
						Start
			</Button>

			<div style={{display: "flex", flexDirection: "row", justifyContent: "center", boxSizing: "border-box"}}>

				<div className="drag-container" style={dragContainerStyle}>

					<Box className="draggable" sx={draggableStyle} id="forward" data-value="forward">Forward</Box>
					<Box className="draggable" sx={draggableStyle} id="left" data-value="left">Left</Box>
					<Box className="draggable" sx={draggableStyle} id="right" data-value="right">Right</Box>
					<Box className="draggable" sx={draggableStyle} id="f1" data-value="f1">F1</Box>
					{/* <div className="draggable" style={draggableStyle} id="forward" data-value="forward">Forward</div>
					<div className="draggable" style={draggableStyle} id="left" data-value="left">Left</div>
					<div className="draggable" style={draggableStyle} id="right" data-value="right">Right</div>
					<div className="draggable" style={draggableStyle} id="f1" data-value="f1">F1</div> */}

				</div>
				
				<div className="drop-container" style={dropContainerStyle}>
					{/* <DropZonesComp/> */}
					{/* <div className="drop-zone" data-value="${i}"/> */}
					<div style={dropZoneStyle} id="drop0" className="drop-zone" data-value="0"/>
					<div style={dropZoneStyle} id="drop1" className="drop-zone" data-value="1"/>
					<div style={dropZoneStyle} id="drop2" className="drop-zone" data-value="2"/>
					<div style={dropZoneStyle} id="drop3" className="drop-zone" data-value="3"/>
					<div style={dropZoneStyle} id="drop4" className="drop-zone" data-value="4"/>
					<div style={dropZoneStyle} id="drop5" className="drop-zone" data-value="5"/>
					<div style={dropZoneStyle} id="drop6" className="drop-zone" data-value="6"/>
					<div style={dropZoneStyle} id="drop7" className="drop-zone" data-value="7"/>
					<div style={dropZoneStyle} id="drop8" className="drop-zone" data-value="8"/>
					<div style={dropZoneStyle} id="drop9" className="drop-zone" data-value="9"/>
				</div>
			</div>
   		</div>
	);
}
