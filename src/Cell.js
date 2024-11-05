import React, { useState } from 'react';

function Cell({ onToggle }) {
  const [isOn, setIsOn] = useState(false);

  const toggleCell = () => {
    setIsOn(!isOn);
    onToggle(!isOn); // Notify the parent component of the state change
  };

  return (
    <div
      onClick={toggleCell}
      style={{
        width: '100px',
        height: '100px',
        border: '1px solid grey',
        backgroundColor: isOn ? 'black' : 'white',
      }}
    ></div>
  );
}

export default Cell;

