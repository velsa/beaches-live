import React from 'react';
import logo from './logo.svg';
import './App.css';
import YouTubeLiveGrid from './components/YouTubeLiveGrid';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to Beaches LIVE</h1>
      </header>
      <section>
        <YouTubeLiveGrid playlistId='PL7mcY6hLwebKZ4r360nzVKitytMeIklT_' />
      </section>
    </div>
  );
}

export default App;
