import React, { useState } from 'react';
import './App.css';
import Game from './tic-tac-tau.jsx';
// import './tic-tac-tau.jsx';
import logo from './logo.svg';

function MyButton() {
  const [count, setCount] = useState(0); 

  function handleClick() {
    setCount(count + 1); 
  }

  return (
    
    <div>
      <button onClick={handleClick}>
        Click me - {count}
      </button>

      <Game/>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Counters that update separately</h1>
//         <MyButton /> 
//         <MyButton /> 
//       </header>
//     </div>
//   );
// }

export default MyButton;

