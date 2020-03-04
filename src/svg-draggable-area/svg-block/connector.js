import React from 'react';
import './index.css';
import config from '../draggable-area.config';

function Connector({x, y, type, id, blockId, index}) {
	let width = config.minBlockwidth;
	let height = config.minBlockHeight;
  return (
		<circle
			data-svg-connector-type={type}
			data-svg-connector-id={id}
			data-svg-connector-block-id={blockId}
			cx={type==="input"?x:x+width} cy={y+height/2+(height/2)*index} r={config.inputOutputRad} 
			style={{strokeWidth:0.2,stroke:"rgb(55,55,55)", fill:"#bbbbbb"}}
			className="connectable"
		/>
  );
}

export default Connector;
