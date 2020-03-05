import React, {useContext} from 'react';
import './index.css';

function BlockName({x, y, name}) {
  return (
		<text className="blockName" x={x+0.5} y={y-0.4}>{name}</text>
	);
}

export default BlockName;
