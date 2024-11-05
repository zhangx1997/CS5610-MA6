import React, { useState } from 'react';
import Cell from './Cell';

function Grid() {
  const [count, setCount] = useState(0);

  const handleToggle = (isOn) => {
    setCount((prevCount) => (isOn ? prevCount + 1 : prevCount - 1));
  };

  return (
    <div>
      <h2>On Cells: {count}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 100px)' }}>
        <Cell onToggle={handleToggle} />
        <Cell onToggle={handleToggle} />
        <Cell onToggle={handleToggle} />
        <Cell onToggle={handleToggle} />
      </div>
    </div>
  );
}

export default Grid;

