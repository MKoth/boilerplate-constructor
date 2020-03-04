import React, {useState} from 'react';
import "./index.css";
import blocks from "./blocksList";
import InventoryBlock from "./inventoryBlock";

function AddBlock() {
  const [inventoryVisible, toggleInventoryVisible] = useState(false);
  return (
    <>
      {!inventoryVisible&&<div onClick={()=>{toggleInventoryVisible(!inventoryVisible)}} className="addBlock">+</div>}
      {inventoryVisible&&<div className="blocksInventory">
        <h2>Choose blocks from here!</h2>
        <button className="closeInventory" onClick={()=>{toggleInventoryVisible(!inventoryVisible)}}>X</button>
        <div className="inventoryHolder">
          {blocks.map(block=>{
            return <InventoryBlock key={block.type} block={block} toggleVisibility={toggleInventoryVisible}></InventoryBlock>
          })}
        </div>
      </div>}
    </>
  );
}

export default AddBlock;