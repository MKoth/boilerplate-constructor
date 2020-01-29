import React from 'react';
import Connector from './connector';
import './index.css';
import config from '../draggable-area.config';

function SvgBlock({x,y, id, inputs, outputs}) {
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
        <Connector type={'input'} key={index} id={index} {...input} {...{x,y}}></Connector>
      ))}
      {outputs.map((output, index) => (
        <Connector type={'output'} key={index} id={index} {...output} {...{x,y}}></Connector>
      ))}
    </>
  );
}

export default SvgBlock;
