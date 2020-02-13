import React from 'react';
import './index.css';
import SvgBlock from './svg-block';
import Connection from "./svg-connection";
import DraggedConnection from './svg-connection/draggedConnection';
import useReduxEvents from "./useReduxEvents";
import DispatchSvgContext from "./dispatchSvgContext";
import AddBlock from "./add-block";

function SvgDraggableArea() {
  let svgRef = React.createRef();
  const {start, stop, dragging, state, dispatch} = useReduxEvents(svgRef);
  const {draggedConBlockType, conStartPos, conEndPos, blocks, connections} = state;
  return (
    <DispatchSvgContext.Provider value={dispatch}>
      <AddBlock></AddBlock>
      <svg xmlns="http://www.w3.org/2000/svg"
        onMouseDown={start} onMouseMove={dragging} onMouseUp={stop}
        ref={svgRef} viewBox="0 0 100 100"
      >
        <rect x="0" y="0" width="100" height="100" fill="#fafafa"/>
        {connections.map((connection, index) => (
          <Connection key={index} connection={connection} blocks={blocks} id={index}></Connection>
        ))}
        {blocks.map((block, index) => (
          <SvgBlock key={index} {...block} id={index}></SvgBlock>
        ))}
        {draggedConBlockType&&<DraggedConnection startPoint={conStartPos} endPoint={conEndPos}></DraggedConnection>}
      </svg>
    </DispatchSvgContext.Provider>
  );
}

export default SvgDraggableArea;