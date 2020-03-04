import React, {useContext} from 'react';
import config from '../draggable-area.config';
import DispatchSvgContext from '../dispatchSvgContext';
import { REMOVE_CONNECTION } from '../actions/actionTypes';
import './index.css';

function RemoveConnection(props) {
	const {blocks, from, to, id} = props;
	const dispatch = useContext(DispatchSvgContext);
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
	function getLineMiddle(){
		const {startX, startY} = getLineStart();
		const {endX, endY} = getLineEnd();
		const middleX = (startX + (endX - startX)/2) - 1;
		const middleY = (startY + (endY - startY)/2) - 1;
		return {middleX, middleY}
	}
	function removeConnection(){
		dispatch({type:REMOVE_CONNECTION, payload:id});
	}
  return (
		<svg onClick={removeConnection} x={getLineMiddle().middleX} y={getLineMiddle().middleY} viewBox="0 0 1100 1100" className="deletable">
			<circle cx="10" cy="10" r="8" fill="#ffffff"/>
			<path stroke="#ff0000" d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
		</svg>
	);
}

export default RemoveConnection;
