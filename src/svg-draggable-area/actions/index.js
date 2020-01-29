import { START_DRAGGING, STOP_DRAGGING, PROCESS_DRAGGING } from './actionTypes';
import { getMousePosition, getOffset } from '../helpers';

export const startDragging = (event, blocks, svg) => {
	const id = parseInt(event.target.getAttributeNS(null, "data-svg-block-id"));
	
	if(!isNaN(id)){
		let mousePos = getMousePosition(event, svg);
		let offset = getOffset(blocks[id], mousePos);
		return { type: START_DRAGGING , payload: { id, offset }}
	}
	return;
};
export const processDragging = (event, blockId, svg, offset) => {
	let mousePos;
	if(!isNaN(blockId)){
		mousePos = getMousePosition(event, svg, offset);
		return { type: PROCESS_DRAGGING, payload: mousePos};
	}
	return;
};
export const stopDragging = () => ({ type: STOP_DRAGGING });