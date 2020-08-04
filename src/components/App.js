import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import MusicPlayer from './MusicPlayer';
import Aside from './Aside';
import Footer from './Footer';
import { songs as data } from './testData';

const App = () => {
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(Object.values(data)[1]);
  const [showSuggest, setShowSuggest] = useState(false);
  const [playingStatus, setPlayingStatus] = useState(false);

  // For rerender brand-new Player component
  const [playerSession, setPlayerSession] = useState(1);

  const onSearchFocus = () => {
    setShowSuggest(true);
  };

  const onSongSelected = song => {
    setShowSuggest(false);
    setCurrentSong(songs[song.id]);
    setSongs({
      ...songs,
      [song.id]: song
    });
    setPlayingStatus(true);
    setPlayerSession(playerSession + 1);
  };

  return (
    <div className="container-fluid" onClick={() => setShowSuggest(false)}>
      <div className="row justify-content-lg-center">
        <SearchBar
          showSuggest={showSuggest}
          onFocus={onSearchFocus}
          onSongSelected={onSongSelected}
        />
      </div>
      <div className="row justify-content-lg-center">
        <MusicPlayer
          key={playerSession}
          song={currentSong}
          isPlaying={playingStatus}
        />
        <Aside songs={Object.values(songs)} onSongSelected={onSongSelected} />
      </div>
      <div className="row justify-content-lg-center">
        <Footer />
      </div>
    </div>
  );
};

export default App;
