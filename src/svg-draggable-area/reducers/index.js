import {
	START_DRAGGING, STOP_DRAGGING, PROCESS_DRAGGING,
	START_CONNECTION_DRAGGING, PROCESS_CONNECTION_DRAGGING, STOP_CONNECTION_DRAGGING,
	ADD_NEW_CONNECTION
} from "../actions/actionTypes";
import mockObject from './mockObject';

export const initialState = mockObject;

export default function reducer(state=initialState, action={}) {
	let {blocks, connections, draggedId} = state;
  switch (action.type) {
		case START_DRAGGING:
			let { id, offset } = action.payload;
			return {...state, draggedId: id, offset};
		case PROCESS_DRAGGING:
			blocks[draggedId] = {...blocks[draggedId], ...action.payload};
			return {...state, ...{blocks: blocks.slice()}};
		case STOP_DRAGGING:
			return {...state, draggedId: null};
		
		case START_CONNECTION_DRAGGING:
			return {...state, ...action.payload};
		case PROCESS_CONNECTION_DRAGGING:
			return {...state, ...action.payload};
		case STOP_CONNECTION_DRAGGING:
			return {...state, draggedConId: null, draggedConBlockId: null, draggedConBlockType: null};

		case ADD_NEW_CONNECTION:
			connections.push(action.payload);
			return {...state, ...{connections: connections.slice()}};
		default:
			return state;
	}
}