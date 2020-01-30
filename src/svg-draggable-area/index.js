import React, {useReducer} from 'react';
import './index.css';
import SvgBlock from './svg-block';
import reducer, { initialState } from './reducers';
import {startDragging,processDragging,stopDragging,startConDragging,processConDragging,stopConDragging} from './actions';
import Connection from "./svg-connection";
import DraggedConnection from './svg-connection/draggedConnection';
import { getConnectorsAttr, getBlockAttr } from './helpers';

function SvgDraggableArea() {
  const [state, dispatch] = useReducer(reducer, initialState);
  let {blocks, draggedId, offset, draggedConId, draggedConBlockType} = state;
  let svgRef = React.createRef();

  function start(e){
    const {id} = getBlockAttr(e.target);
    const attrValues = getConnectorsAttr(e.target);
    const {draggedConId, draggedConBlockId, draggedConBlockType} = attrValues;
    if(!isNaN(id)){
      dispatch(startDragging(e, blocks, svgRef.current, id)); 
    }
    else if(!isNaN(draggedConId)&&!isNaN(draggedConBlockId)&&draggedConBlockType){
      dispatch(startConDragging(e, svgRef.current, attrValues));
    }
  }
  function dragging(e){
    if(draggedId!==null){
      dispatch(processDragging(e, svgRef.current, offset));
    }
    else if(draggedConId!==null){
      dispatch(processConDragging(e, svgRef.current));
    }
  }
  function stop(e){
    if(draggedId!==null){
      dispatch(stopDragging());
    }
    else if(draggedConId!==null){
      dispatch(stopConDragging(e, state, dispatch));
    }
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      onMouseDown={start} onMouseMove={dragging} onMouseUp={stop}
      ref={svgRef} viewBox="0 0 100 100"
    >
      <rect x="0" y="0" width="100" height="100" fill="#fafafa"/>
      {state.connections.map((connection, index) => (
        <Connection key={index} connection={connection} blocks={state.blocks} id={index}></Connection>
      ))}
      {state.blocks.map((block, index) => (
        <SvgBlock key={index} {...block} id={index}></SvgBlock>
      ))}
      {draggedConBlockType&&<DraggedConnection startPoint={state.conStartPos} endPoint={state.conEndPos}></DraggedConnection>}
    </svg>
  );
}

export default SvgDraggableArea;