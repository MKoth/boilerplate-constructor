import React, {useReducer} from 'react';
import './index.css';
import SvgBlock from './svg-block';
import reducer, { initialState } from './reducers';
import { startDragging, processDragging, stopDragging } from './actions';
import Connection from "./svg-connection"

function SvgDraggableArea() {
  const [state, dispatch] = useReducer(reducer, initialState);
  let {blocks, draggedId, offset} = state;
  let svgRef = React.createRef();
  return (
    <svg xmlns="http://www.w3.org/2000/svg"

      onMouseDown={(e)=>{dispatch(startDragging(e, blocks, svgRef.current))}}
      onMouseMove={(e)=>{dispatch(processDragging(e, draggedId, svgRef.current, offset))}}
      onMouseUp={(e)=>{dispatch(stopDragging())}}

      ref={svgRef}
      viewBox="0 0 100 100"
    >
      <rect x="0" y="0" width="100" height="100" fill="#fafafa"/>
      {state.blocks.map((block, index) => (
        <SvgBlock key={index} {...block} id={index}></SvgBlock>
      ))}
      {state.connections.map((connection, index) => (
        <Connection key={index} connection={connection} blocks={state.blocks} id={index}></Connection>
      ))}
    </svg>
  );
}

export default SvgDraggableArea;
