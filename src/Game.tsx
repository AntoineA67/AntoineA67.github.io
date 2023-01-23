import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import {
	Box,
	Button,
	Grid,
} from "@mui/material";
import $ from 'jquery';
import { dragContainerStyle, dropContainerStyle, dropZoneStyle, draggableStyle } from "./styles/GameStyles";

gsap.registerPlugin(Draggable);

export function Game() {

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
	
	function checkTiles() {
		console.log("checkTiles")
		var tempBlocks = []
		var idBlocks:any = document.getElementById("blocks")
		idBlocks.innerHTML = ""
		for (var i = 0; i < dropZones.length; i++) {
			var tile = dropZones[i];
			
			if (!tile.child) {
				continue;
			}
			var p = document.createElement("li");
			p.innerHTML = tile.child.dataset.value
			idBlocks.appendChild(p)
			tempBlocks.push(tile.child.dataset.value)
			console.log(tile.child.dataset.value)
		}
		// setBlocks(Array.from(tempBlocks))
		return tempBlocks
	}
	
	function createDropZones(count: number) {
		
		for (var i = 0; i < count; i++) {
			// var dropZone = $(<div className="drop-zone" data-value={i}/>).appendTo(dropContainer);
			var dropZone:any = $(`#drop${i}`)
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
			x: index * window.innerWidth * .12,
			y: 0,
		})
		
		// console.log("created")
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

				// handleBlocks(checkTiles())
				checkTiles()
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
				// handleBlocks(checkTiles())
				checkTiles()
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
				// handleBlocks(checkTiles())
				checkTiles()
				// console.log(handleBlocks(checkTiles()), "checkTiles", checkTiles())
				
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
		gsap.to(target, { duration: 0.2, x: index * window.innerWidth * .12, y: 0 });
	}

	return (
		<div className="Game">
			{/* <Button size="large"
					variant="contained"
					onClick={checkTiles}>
					Start
				</Button> */}
			<div style={{display: "flex", flexDirection: "row", justifyContent: "center", boxSizing: "border-box"}}>

			<div className="drag-container" style={dragContainerStyle}>

			<Box component="div" className="draggable" style={draggableStyle} id="forward" data-value="forward">Forward</Box>
			<Box component="div" className="draggable" style={draggableStyle} id="left" data-value="left">Left</Box>
			<Box component="div" className="draggable" style={draggableStyle} id="right" data-value="right">Right</Box>
			<Box component="div" className="draggable" style={draggableStyle} id="f1" data-value="f1">F1</Box>


			</div>

				<div className="drop-container" style={dropContainerStyle}>
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
			<ul style={{display: "none"}} id="blocks"></ul>
   		</div>
	);
}
