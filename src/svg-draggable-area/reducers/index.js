import {START_DRAGGING, STOP_DRAGGING, PROCESS_DRAGGING} from "../actions/actionTypes";
import mockObject from './mockObject';

export const initialState = mockObject

export default function reducer(state=initialState, action={}) {
	let {blocks, draggedId} = state;
  switch (action.type) {
		case START_DRAGGING:
			let { id, offset } = action.payload;
			return {...state, draggedId: id, offset};
		case PROCESS_DRAGGING:
			blocks[draggedId] = {...blocks[draggedId], ...action.payload};
			return {...state, ...{blocks: blocks.slice()}};
    case STOP_DRAGGING:
			return {...state, draggedId: null};
    default:
      return state;
	}
}