import React, { useRef } from 'react';
import './App.css';
import SvgDraggableArea from './svg-draggable-area';
import useReduxEvents from "./useReduxEvents";
import DispatchContext from "./dispatchContext";

function App() {
  const svgRef = useRef();
  const {start, stop, dragging, state, dispatch} = useReduxEvents(svgRef);
  const {draggedConBlockType, conStartPos, conEndPos, blocks, connections} = state;
  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <SvgDraggableArea forwardRef={svgRef} dragEvts={{start, stop, dragging}} blocks={blocks} connections={connections} drgConnParams={{draggedConBlockType, conStartPos, conEndPos}}></SvgDraggableArea>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
