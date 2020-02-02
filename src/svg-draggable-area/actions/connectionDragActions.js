import { START_CONNECTION_DRAGGING, STOP_CONNECTION_DRAGGING, PROCESS_CONNECTION_DRAGGING, ADD_NEW_CONNECTION } from './actionTypes';
import { getMousePosition, getConnectorsAttr } from '../helpers';
import _ from 'lodash';

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

export const stopConDragging = (event, {draggedConBlockType, draggedConBlockId, draggedConId, connections}, dispatch) => {
	//get attributes of circle holding connections
	const { draggedConId:dropConId, 
					draggedConBlockId:dropConBlockId, 
					draggedConBlockType:dropConBlockType } = getConnectorsAttr(event.target);
	//check if attributes exists and connection types are not the same (e.x. input=input or output=output)
	if(	!isNaN(dropConId)&&!isNaN(dropConBlockId)&&dropConBlockType&&
			canConnect(draggedConBlockType, dropConBlockType, draggedConBlockId, dropConBlockId)
	){
		//if exists creating a new connection 
		let newConnection = draggedConBlockType === 'input'?{
			from: {block:dropConBlockId, output:dropConId},
			to: {block:draggedConBlockId, input:draggedConId}
		} : {
			from: {block:draggedConBlockId, output:draggedConId},
			to: {block:dropConBlockId, input:dropConId}
		};
		//create connection if it does not exists already
		if(!connExists(connections, newConnection)){
			dispatch({type:ADD_NEW_CONNECTION, payload: newConnection});
		}
	}
	return { type: STOP_CONNECTION_DRAGGING }
};


function canConnect(con1BlockType,con2BlockType, con1BlockId, von2BlockId){
	return con1BlockType!==con2BlockType&&con1BlockId!==von2BlockId
}
function connExists(connectionsArr, connection){
	return connectionsArr.find(conn => (_.isEqual(conn, connection)))!==undefined;
}