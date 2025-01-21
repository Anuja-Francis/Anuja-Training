import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

function Context() {
  const [user] = useState({ name: 'Alice', age: 25 });

  return (
    <MyContext.Provider value={user}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

function ChildComponent() {
  const user = useContext(MyContext); 

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default Context;
