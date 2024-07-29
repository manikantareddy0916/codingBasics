import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable named "count" initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* When the button is clicked, setCount updates the value of "count" */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
