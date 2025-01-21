import React, { useState, Suspense, lazy } from 'react';
import './App.css';
import Game from './tic-tac-tau.jsx';
import {ShoppingList,AboutPage} from './about.jsx';
import Board from './props.jsx';
import { VideoPlayer } from './useeffect.jsx';
import App from './thinking.jsx';
import { Parent } from './lifting.jsx';
import App1 from './id.jsx';
import Loading from './loading.jsx';
import Context from './context.jsx';
//import logo from './logo.svg';

const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview.jsx')));

export function MyButton() {
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
      <App1/>
      <MarkdownEditor/>
      <Context/>
    </div>
  );
}

export default MyButton;


export function MarkdownEditor() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState('Hello, world!');
  return (
    <>
      <textarea value={markdown} onChange={e => setMarkdown(e.target.value)} />
      <label>
        <input type="checkbox" checked={showPreview} onChange={e => setShowPreview(e.target.checked)} />
        Show preview
      </label>
      <hr />
      {showPreview && (
        <Suspense fallback={<Loading />}>
          <h2>Preview</h2>
          <MarkdownPreview markdown={markdown} />
        </Suspense>
      )}
    </>
  );
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}