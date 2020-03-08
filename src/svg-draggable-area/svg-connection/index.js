import React from 'react';
import config from '../draggable-area.config';
import RemoveConnection from './removeConnection';

function Connection(props) {
	const {blocks, from, to} = props;
	function getLineStart(){
		const fromBlock =  blocks.find(block=>block.id===from.block);
		const outputConn = fromBlock.outputs.find(output=>output.id===from.output);
		const startX = fromBlock.x + config.minBlockwidth + config.inputOutputRad/2 + 0.5;
		const startY = fromBlock.y + config.minBlockHeight/2 + config.minBlockHeight/2*fromBlock.outputs.indexOf(outputConn);
		return {startX, startY};
	}
	function getLineEnd(){
		const toBlock =  blocks.find(block=>block.id===to.block);
		const inputConn = toBlock.inputs.find(input=>input.id===to.input);
		const endX = toBlock.x - config.inputOutputRad/2 - 0.5;
		const endY = toBlock.y + config.minBlockHeight/2 + config.minBlockHeight/2*toBlock.inputs.indexOf(inputConn);
		return {endX, endY};
	}
	function getPathCoords(){
		const {startX, startY} = getLineStart();
		const {endX, endY} = getLineEnd();
		const startCoords = startX+" "+startY;
		const endCoords = endX+" "+endY;
		const halfWayX = (endX-startX)/2;
		const startBezier = (endX-halfWayX)+" "+startY;
		const endBezier = (startX+halfWayX)+" "+endY;
		let stroke = "M "+startCoords+" C "+startBezier+" "+endBezier+" "+endCoords;
		return stroke;
	}
  return (
		<>
		<path d={getPathCoords()} stroke="#333333" fill="transparent" style={{strokeWidth:0.4}}/>
		<RemoveConnection {...props}></RemoveConnection>
		</>
	);
}

export default Connection;
