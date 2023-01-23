import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import {
	Box,
} from "@mui/material";
import $ from 'jquery';
import { dragContainerStyle, dropContainerStyle, dropZoneStyle, draggableStyle, imgIconStyle } from "./styles/GameStyles";
import { useEffect } from "react";
import forwardImg from '/src/assets/blocks-icons/Forward.png'
import leftImg from '/src/assets/blocks-icons/Left.png'
import rightImg from '/src/assets/blocks-icons/Right.png'


export function Game() {
	function createDropZones(count: number) {
		
		for (var i = 0; i < count; i++) {
			// var dropZone = $(<div className="drop-zone" data-value={i}/>).appendTo(dropContainer);
			var dropZone:any = $(`#drop${i}`)
			dropZones.push(dropZone);
			dropZone.child = null
		}
	}
	
	var dropContainer:any;
	var dragContainer:any;
	var bases:any;
	
	var dropMargin = 5;
	var dropBorder = 3;
	var dropZones: any[] = [];
	var threshold = "50%"
	
	const nDropZones = 6
	
	useEffect(() => {
		gsap.registerPlugin(Draggable);
		dropContainer = $(".drop-container");
		
		dragContainer = $(".drag-container");
		// console.log(dragContainer.position())
		dragContainer.offset({
			'top': dropContainer.position().y,
			'left': dropContainer.position().x,
		});
		// console.log(dragContainer.position())
		
		bases = [
			$("#forward"),
			$("#left"),
			$("#right"),
			$("#f1"),
		]
		createDropZones(nDropZones);
		for (let i = 0; i < bases.length; i++) {
			createDraggable(i);
		}
		$(window).on('resize', () => {

		})
	})
	
	
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
			// console.log(tile.child.dataset.value)
		}
		return tempBlocks
	}
	
	
	function createDraggable(index: number) {
		var containerPos: any = dropContainer.position();

		console.log(containerPos)

		// gsap.set(bases[index], {
		// 	x: (index - 4) * window.innerWidth * .12,
		// 	y: 0,
		// })
		gsap.set(bases[index], {
			x: (index - 1.5) * window.innerWidth * .12,
			y: 0,
		})
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
		gsap.to(target, { duration: 0.2, x: (index - 1.5) * window.innerWidth * .12, y: 0 });
	}

	return (
		<div className="Game">
			{/* <Button size="large"
					variant="contained"
					onClick={checkTiles}>
					Start
				</Button> */}
			<div style={{ display: "flex", flexDirection: "row", justifyContent: "center", boxSizing: "border-box"}}>
				<div className="drag-container" style={dragContainerStyle}>
					<div className="draggable" style={draggableStyle} id="forward" data-value="forward"><img style={imgIconStyle} src={forwardImg}/></div>
					<div className="draggable" style={draggableStyle} id="left" data-value="left"><img style={imgIconStyle} src={leftImg}/></div>
					<div className="draggable" style={draggableStyle} id="right" data-value="right"><img style={imgIconStyle} src={rightImg}/></div>
					{/* <div src="image" className="draggable" style={draggableStyle} id="f1" data-value="f1">F1</div> */}
				</div>
				<div className="drop-container" style={dropContainerStyle}>
					<div style={dropZoneStyle} id="drop0" className="drop-zone" data-value="0"/>
					<div style={dropZoneStyle} id="drop1" className="drop-zone" data-value="1"/>
					<div style={dropZoneStyle} id="drop2" className="drop-zone" data-value="2"/>
					<div style={dropZoneStyle} id="drop3" className="drop-zone" data-value="3"/>
					<div style={dropZoneStyle} id="drop4" className="drop-zone" data-value="4"/>
					<div style={dropZoneStyle} id="drop5" className="drop-zone" data-value="5"/>
					{/* <div style={dropZoneStyle} id="drop6" className="drop-zone" data-value="6"/>
					<div style={dropZoneStyle} id="drop7" className="drop-zone" data-value="7"/>
					<div style={dropZoneStyle} id="drop8" className="drop-zone" data-value="8"/>
					<div style={dropZoneStyle} id="drop9" className="drop-zone" data-value="9"/> */}
				</div>
			</div>
			<ul style={{display: "none"}} id="blocks"></ul>
   		</div>
	);
}
