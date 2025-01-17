import React, { useState } from 'react';
import './App.css';
import Game from './tic-tac-tau.jsx';
// import AboutPage from './about.jsx';
import {ShoppingList,AboutPage} from './about.jsx';
//import logo from './logo.svg';

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
      <AboutPage/>
      <Game/>
      <ShoppingList />
    </div>
  );
}

export default MyButton;

