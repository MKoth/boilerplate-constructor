import { START_CONNECTION_DRAGGING, STOP_CONNECTION_DRAGGING, PROCESS_CONNECTION_DRAGGING, ADD_NEW_CONNECTION } from './actionTypes';
import { getMousePosition, getConnectorsAttr } from '../helpers';

export const startConDragging = (event, svg, {draggedConId, draggedConBlockType, draggedConBlockId}) => {
	const conStartPos = getMousePosition(event, svg);
	const conEndPos = {...conStartPos};
	return { type: START_CONNECTION_DRAGGING, payload: {
		draggedConId, draggedConBlockId, 
		draggedConBlockType, conStartPos, conEndPos
	}};
};

export const processConDragging = (event, svg) => {
		const conEndPos = getMousePosition(event, svg);
		return { type: PROCESS_CONNECTION_DRAGGING, payload: {conEndPos}};
};

export const stopConDragging = (event, {draggedConBlockType, draggedConBlockId, draggedConId}, dispatch) => {
	const { draggedConId:dropConId, 
					draggedConBlockId:dropConBlockId, 
					draggedConBlockType:dropConBlockType } = getConnectorsAttr(event.target);
	if(	!isNaN(dropConId)&&!isNaN(dropConBlockId)&&dropConBlockType&&
			canConnect(draggedConBlockType, dropConBlockType, draggedConBlockId, dropConBlockId)
	){
		let newConnection = draggedConBlockType === 'input'?{
			from: {block:dropConBlockId, output:dropConId},
			to: {block:draggedConBlockId, input:draggedConId}
		} : {
			from: {block:draggedConBlockId, output:draggedConId},
			to: {block:dropConBlockId, input:dropConId}
		};

		dispatch({type:ADD_NEW_CONNECTION, payload: newConnection});
	}
	return { type: STOP_CONNECTION_DRAGGING }
};


function canConnect(con1BlockType,con2BlockType, con1BlockId, von2BlockId){
	return con1BlockType!==con2BlockType&&con1BlockId!==von2BlockId
}