import './App.css';
import React from 'react';

import MusicPlayer from './MusicPlayer';
import SearchBar from './search-bar/searchBar';

const App = () => {
  return (
    <div className="container">
      <SearchBar />
      <MusicPlayer />
    </div>
  );
};

export default App;
