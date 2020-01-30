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
export function getSvgAttr(target, attributeName, type) {
	if(type === 'integer')
		return parseInt(target.getAttributeNS(null, attributeName));
	if(type === 'float')
		return parseFloat(target.getAttributeNS(null, attributeName));
	return target.getAttributeNS(null, attributeName);
}
export function getConnectorsAttr(target) {
	const draggedConId = getSvgAttr(target, "data-svg-connector-id", "integer");
	const draggedConBlockId = getSvgAttr(target, "data-svg-connector-block-id", "integer");
	const draggedConBlockType = getSvgAttr(target, "data-svg-connector-type");
	return {draggedConId, draggedConBlockId, draggedConBlockType}
}
export function getBlockAttr(target) {
	const id = parseInt(target.getAttributeNS(null, "data-svg-block-id"));
	return {id};
}