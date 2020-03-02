import React, {useContext} from 'react';
import DispatchSvgContext from '../dispatchSvgContext';
import {addBlock} from '../actions';

function InventoryBlock({block}) {
  const dispatch = useContext(DispatchSvgContext);
  return <div onClick={()=>{dispatch(addBlock(block))}} className="blocksHolder">{block.name}</div>
}

export default InventoryBlock;