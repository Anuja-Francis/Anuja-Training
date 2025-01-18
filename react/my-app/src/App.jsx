import React, { useState } from 'react';
import './App.css';
import Game from './tic-tac-tau.jsx';
import {ShoppingList,AboutPage} from './about.jsx';
import Board from './props.jsx';
import { VideoPlayer } from './useeffect.jsx';
import App from './thinking.jsx';
import { Parent } from './lifting.jsx';
//import logo from './logo.svg';

function MyButton() {
  const [count, setCount] = useState(0); 
  const [isPlaying, setIsPlaying] = useState(false); 

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
      <Board/>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause Video' : 'Play Video'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
      <App/>
      <Parent/>
    </div>
  );
}

export default MyButton;

