
//useMemo is a hook provided by React that allows you to memoize the result of a computation, preventing unnecessary re-computation on re-renders of a component. It's particularly useful for optimizing performance in situations where a calculation or expensive operation is repeated frequently but doesn't need to be recalculated every time the component renders.

import React, { useState, useMemo } from 'react';

const ExpensiveComponent = () => {
  const [number, setNumber] = useState(0);

  // Memoize the result of the expensive calculation
  const expensiveResult = useMemo(() => {
    console.log('Expensive calculation');
    return number * 2;
  }, [number]); // Recalculate only when the "number" state changes

  return (
    <div>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <p>Result of expensive calculation: {expensiveResult}</p>
    </div>
  );
};

export default ExpensiveComponent;
