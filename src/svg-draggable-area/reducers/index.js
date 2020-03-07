import {
	START_DRAGGING, STOP_DRAGGING, PROCESS_DRAGGING,
	START_CONNECTION_DRAGGING, PROCESS_CONNECTION_DRAGGING, STOP_CONNECTION_DRAGGING,
	ADD_NEW_CONNECTION, REMOVE_CONNECTION, ADD_NEW_BLOCK, REMOVE_BLOCK
} from "../actions/actionTypes";
import mockObject from './mockObject';

export const initialState = mockObject;

export default function reducer(state=initialState, action={}) {
	let {blocks, connections, draggedIndex} = state;
  switch (action.type) {
		case START_DRAGGING:
			let { index, offset } = action.payload;
			//reordering blocks so the dragged block would be last in array and thus rendered last and gonna be visible
			blocks.push(blocks.splice(index, 1)[0]);
			return {...state, draggedIndex: blocks.length - 1, offset, ...{blocks: blocks.slice()}};
		case PROCESS_DRAGGING:
			blocks[draggedIndex] = {...blocks[draggedIndex], ...action.payload};
			return {...state, ...{blocks: blocks.slice()}};
		case STOP_DRAGGING:
			return {...state, draggedIndex: null};
		
		case START_CONNECTION_DRAGGING:
			return {...state, ...action.payload};
		case PROCESS_CONNECTION_DRAGGING:
			return {...state, ...action.payload};
		case STOP_CONNECTION_DRAGGING:
			return {...state, draggedConId: null, draggedConBlockId: null, draggedConBlockType: null};

		case ADD_NEW_CONNECTION:
			connections.push(action.payload);
			return {...state, ...{connections: connections.slice()}};
		case REMOVE_CONNECTION:
			let deletedConn = connections.find(conn=>conn.id===action.payload);
			connections.splice(connections.indexOf(deletedConn), 1);
			return {...state, ...{connections: connections.slice()}};

		case ADD_NEW_BLOCK:
			blocks.push(action.payload.block);
			return {...state, ...{blocks: blocks.slice()}};
		case REMOVE_BLOCK:
			connections = connections.filter(conn=>conn.from.block!==action.payload.id&&conn.to.block!==action.payload)
			blocks = blocks.filter(block=>block.id!==action.payload);
			return {...state, ...{blocks, connections}};
		default:
			return state;
	}
}