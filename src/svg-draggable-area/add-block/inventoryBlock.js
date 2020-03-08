import React, {useContext} from 'react';
import DispatchContext from '../../dispatchContext';
import {addBlock} from '../../actions';
import _ from 'lodash';

function InventoryBlock({block, toggleVisibility}) {
  const dispatch = useContext(DispatchContext);
  return <div onClick={()=>{dispatch(addBlock(_.cloneDeep(block)));toggleVisibility(false);}} className="blocksHolder">{block.name}</div>
}

export default InventoryBlock;