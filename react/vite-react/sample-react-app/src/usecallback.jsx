import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent onClick={increment} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Increment</button>;
}

export default ParentComponent;
