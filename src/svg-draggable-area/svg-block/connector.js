import React from 'react';
import './index.css';
import config from '../draggable-area.config';

function Connector({x, y, type, id}) {
	let width = config.minBlockwidth;
	let height = config.minBlockHeight;
  return (
		<circle 
			cx={type=="input"?x:x+width} cy={y+height/2+(height/2)*id} r={config.inputOutputRad} 
			style={{strokeWidth:0.3,stroke:"rgb(55,55,55)", fill:"#bbbbbb"}}
		/>
  );
}

export default Connector;
