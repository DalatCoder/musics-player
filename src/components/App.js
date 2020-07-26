import './App.css';
import React from 'react';

import MusicPlayer from './music-player/MusicPlayer';
import SearchBar from './search-bar/SearchBar';
import SpinLoader from './spin-loader';

const App = () => {
  return (
    <div className="container">
      <SearchBar />
      <MusicPlayer />

      <SpinLoader />
    </div>
  );
};

export default App;
