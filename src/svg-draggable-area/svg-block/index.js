import React from 'react';
import Connector from './connector';
import RemoveBlock from './removeBlock';
import EditBlock from './editBlock';
import BlockName from './blockName';
import './index.css';
import config from '../draggable-area.config';

function SvgBlock({x,y, id, inputs, outputs, name}) {
  function calculateBlockHeight(){
    const halfHeight = config.minBlockHeight/2;
    const inQuant = inputs.length;
    const outQuant = outputs.length;
    return halfHeight+(inQuant>outQuant?inQuant*halfHeight:outQuant*halfHeight);
  }
  return (
    <>
      <rect 
        data-svg-block-id={id} {...{x,y}} 
        width={config.minBlockwidth} 
        height={calculateBlockHeight()} 
        className="draggable" 
        rx="1" ry="1"
        style={{strokeWidth:0.2,stroke:"rgb(55,55,55)", fill:"#eeeeee"}}
      />
      {inputs.map((input, index) => (
        <Connector {...input} type={'input'} key={input.id} blockId={id} index={index} {...{x,y}}></Connector>
      ))}
      {outputs.map((output, index) => (
        <Connector {...output} type={'output'} key={output.id} blockId={id} index={index} {...{x,y}}></Connector>
      ))}
      <RemoveBlock {...{id,x,y}}></RemoveBlock>
      <EditBlock {...{id,x,y}}></EditBlock>
      <BlockName {...{x,y, name}}></BlockName>
    </>
  );
}

export default SvgBlock;
