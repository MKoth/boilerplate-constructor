import React from 'react';
import './index.css';

function ConnectionName({x, y, name, type}) {
  return (
		<>
			{type==='output'&&<text textAnchor="end" className="connectionName" x={x-1.5} y={y+0.6}>{name}</text>}
			{type==='input'&&<text className="connectionName" x={x+1.5} y={y+0.6}>{name}</text>}
		</>
	);
}

export default ConnectionName;
