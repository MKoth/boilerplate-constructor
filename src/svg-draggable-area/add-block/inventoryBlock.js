import React, {useContext} from 'react';
import DispatchSvgContext from '../dispatchSvgContext';
import {addBlock} from '../actions';
import _ from 'lodash';

function InventoryBlock({block, toggleVisibility}) {
  const dispatch = useContext(DispatchSvgContext);
  return <div onClick={()=>{dispatch(addBlock(_.cloneDeep(block)));toggleVisibility(false);}} className="blocksHolder">{block.name}</div>
}

export default InventoryBlock;