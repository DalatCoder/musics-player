import './App.css';
import React from 'react';

import MusicPlayer from './music-player/MusicPlayer';
import SearchBar from './search-bar/SearchBar';

const App = () => {
  return (
    <div className="container">
      <SearchBar />
      <MusicPlayer />
    </div>
  );
};

export default App;
