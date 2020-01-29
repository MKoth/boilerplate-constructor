import React from 'react';
import config from '../draggable-area.config';

function Connection({blocks, connection}) {
	let startX, startY, endX, endY
	function getLineStart(){
		const fromBlock =  blocks[connection.from.block];
		startX = fromBlock.x + config.minBlockwidth + config.inputOutputRad/2 + 0.5;
		startY = fromBlock.y + config.minBlockHeight/2 + config.minBlockHeight/2*connection.from.output;
	}
	function getLineEnd(){
		const toBlock =  blocks[connection.to.block];
		endX = toBlock.x - config.inputOutputRad/2 - 0.5;
		endY = toBlock.y + config.minBlockHeight/2 + config.minBlockHeight/2*connection.to.input;
	}
	function getPathCoords(){
		getLineStart();
		getLineEnd();
		let stroke = "M "+startX+" "+startY+" C "+endX+" "+startY+" "+startX+" "+endY+" "+endX+" "+endY;
		return stroke;
	}
  return (
		<path d={getPathCoords()} stroke="#333333" fill="transparent" style={{strokeWidth:0.4}}/>
  );
}

export default Connection;
