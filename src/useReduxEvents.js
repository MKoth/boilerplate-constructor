import {useReducer} from 'react';
import reducer, { initialState } from './reducers';
import {startDragging,processDragging,stopDragging,startConDragging,processConDragging,stopConDragging} from './actions';
import { getConnectorsAttr, getBlockAttr } from './helpers';

export default function useReduxEvents(svgRef) {
  const [state, dispatch] = useReducer(reducer, initialState);
  let {blocks, draggedIndex, offset, draggedConId} = state;

  function start(e){
    const {id} = getBlockAttr(e.target);
    const attrValues = getConnectorsAttr(e.target);
    const {draggedConId, draggedConBlockId, draggedConBlockType} = attrValues;
    if(id){
      dispatch(startDragging(e, blocks, svgRef.current, id)); 
    }
    else if(draggedConId&&draggedConBlockId&&draggedConBlockType){
      dispatch(startConDragging(e, svgRef.current, attrValues));
    }
  }
  function dragging(e){
    if(draggedIndex!==null){
      dispatch(processDragging(e, svgRef.current, offset));
    }
    else if(draggedConId!==null){
      dispatch(processConDragging(e, svgRef.current));
    }
  }
  function stop(e){
    if(draggedIndex!==null){
      dispatch(stopDragging());
    }
    else if(draggedConId!==null){
      dispatch(stopConDragging(e, state, dispatch));
    }
  }
  return {start, stop, dragging, state, dispatch}
}
