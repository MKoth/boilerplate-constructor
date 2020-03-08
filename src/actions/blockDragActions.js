import { START_DRAGGING, STOP_DRAGGING, PROCESS_DRAGGING } from './actionTypes';
import { getMousePosition, getOffset } from '../helpers';

export const startDragging = (event, blocks, svg, id) => {
		let draggedBlock = blocks.find(block=>block.id===id);
		let index = blocks.indexOf(draggedBlock);
		let mousePos = getMousePosition(event, svg);
		let offset = getOffset(draggedBlock, mousePos);
		return { type: START_DRAGGING , payload: { index, offset }}
};
export const processDragging = (event, svg, offset) => {
	const mousePos = getMousePosition(event, svg, offset);
	return { type: PROCESS_DRAGGING, payload: mousePos};
};
export const stopDragging = () => ({ type: STOP_DRAGGING });