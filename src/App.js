import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer';
import 'video.js/dist/video-js.css';

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [{
    src: 'http://localhost:1337/uploads/53f53f7df7fa4938965a597f113a12fa.mp4',
    type: 'video/mp4'
  }]
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <VideoPlayer { ...videoJsOptions } />
    </div>
  );
}

export default App;
