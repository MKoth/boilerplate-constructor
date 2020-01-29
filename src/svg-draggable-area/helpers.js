export function getMousePosition(evt, svg, offset = {x:0, y:0}) {
	var CTM = svg.getScreenCTM();
	return {
		x: ((evt.clientX - CTM.e) / CTM.a) + offset.x,
		y: ((evt.clientY - CTM.f) / CTM.d) + offset.y
	};
}
export function getOffset(block, mousePos) {
	let offset = {};
	offset.x = block.x - mousePos.x;
	offset.y = block.y - mousePos.y;
	return offset;
}