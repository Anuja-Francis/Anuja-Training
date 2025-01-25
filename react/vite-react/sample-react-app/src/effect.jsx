import React, { useState, useEffect } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} new message!`;
  }, [count]); 

  return (
    <>
      <h3>{count} new message!</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default Count;
