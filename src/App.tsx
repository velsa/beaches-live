import React from 'react';
import logo from './logo.svg';
import './App.css';
import YouTubeLiveGrid from './components/YouTubeLiveGrid';
import YouTubeFS from './components/YouTubeFS';

function App() {
  return (
    <div className='App'>
      <YouTubeLiveGrid playlistId='PL7mcY6hLwebKZ4r360nzVKitytMeIklT_' />
      {/* <YouTubeFS /> */}
    </div>
  );
}

export default App;
