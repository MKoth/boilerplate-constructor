import React from 'react';
import config from '../draggable-area.config';
import RemoveConnection from './removeConnection';

function Connection({blocks, connection}) {
	function getLineStart(){
		const fromBlock =  blocks[connection.from.block];
		const startX = fromBlock.x + config.minBlockwidth + config.inputOutputRad/2 + 0.5;
		const startY = fromBlock.y + config.minBlockHeight/2 + config.minBlockHeight/2*connection.from.output;
		return {startX, startY};
	}
	function getLineEnd(){
		const toBlock =  blocks[connection.to.block];
		const endX = toBlock.x - config.inputOutputRad/2 - 0.5;
		const endY = toBlock.y + config.minBlockHeight/2 + config.minBlockHeight/2*connection.to.input;
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
		<RemoveConnection blocks={blocks} connection={connection}></RemoveConnection>
		</>
	);
}

export default Connection;
