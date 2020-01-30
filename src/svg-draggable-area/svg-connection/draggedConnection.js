import React from 'react';

function DraggedConnection({startPoint, endPoint}) {
	function getPathCoords(){
		const startX = startPoint.x;
		const startY = startPoint.y;
		const endX = endPoint.x;
		const endY = endPoint.y;
		const startCoords = startX+" "+startY;
		const endCoords = endX+" "+endY;
		const halfWayX = (endX-startX)/2;
		const startBezier = (endX-halfWayX)+" "+startY;
		const endBezier = (startX+halfWayX)+" "+endY;
		let stroke = "M "+startCoords+" C "+startBezier+" "+endBezier+" "+endCoords;
		return stroke;
	}
  return (
		<path d={getPathCoords()} stroke="#333333" fill="transparent" style={{strokeWidth:0.4}}className="temp-connection"/>
  );
}

export default DraggedConnection;