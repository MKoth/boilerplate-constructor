import React from 'react';
import './index.css';
import SvgBlock from './svg-block';
import Connection from "./svg-connection";
import DraggedConnection from './svg-connection/draggedConnection';
import AddBlock from "./add-block";

function SvgDraggableArea({dragEvts, blocks, connections, drgConnParams, forwardRef}) {
  //let svgRef = React.createRef();
  return (
    <>
      <AddBlock></AddBlock>
      <svg xmlns="http://www.w3.org/2000/svg"
        onMouseDown={dragEvts.start} onMouseMove={dragEvts.dragging} onMouseUp={dragEvts.stop}
        ref={forwardRef} viewBox="0 0 100 100"
      >
        <rect x="0" y="0" width="100" height="100" fill="#fafafa"/>
        {connections.map((connection) => (
          <Connection key={connection.from.output+"-"+connection.to.input} {...connection} blocks={blocks}></Connection>
        ))}
        {blocks.map((block) => (
          <SvgBlock key={block.id} {...block}></SvgBlock>
        ))}
        {drgConnParams.draggedConBlockType&&<DraggedConnection startPoint={drgConnParams.conStartPos} endPoint={drgConnParams.conEndPos}></DraggedConnection>}
      </svg>
    </>
  );
}

export default SvgDraggableArea;