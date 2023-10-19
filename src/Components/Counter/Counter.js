import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleAdd() {
    setCount(count + 1);
  }
  function handleMinus() {
    setCount(count - 1);
  }

  return (
    <div className="count">
      <h1>Count:{count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleMinus}>Minus</button>
    </div>
  );
};

export default Counter;
