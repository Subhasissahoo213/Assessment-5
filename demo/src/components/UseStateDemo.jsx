import React, { useState } from 'react';
import './UseStateDemo.css'; // Importing the style file

function UseStateDemo() {
  // Declare a state variable called 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <div className="counter-display">
        <p>Current Count: <span>{count}</span></p>
      </div>
      <div className="button-group">
        <button className="btn increment" onClick={increment}>Increment</button>
        <button className="btn decrement" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default UseStateDemo;