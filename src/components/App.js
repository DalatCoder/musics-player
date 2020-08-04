import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import MusicPlayer from './MusicPlayer/MusicPlayer';
import Aside from './Aside/Aside';
import Footer from './Footer/Footer';
import { songs as data } from './testData';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(Object.values(data)[1]);
  const [showSuggest, setShowSuggest] = useState(false);
  const [playingStatus, setPlayingStatus] = useState(false);

  // For rerender brand-new Player component
  const [playerSession, setPlayerSession] = useState(1);

  useEffect(() => {
    const raw = window.localStorage.getItem('songs') || [];

    if (raw.length > 0) {
      const songs = JSON.parse(raw);
      setSongs(songs);
      setCurrentSong(Object.values(songs)[0]);
    }
  }, []);

  const showAside = Object.keys(songs).length > 0 ? true : false;

  const onSearchFocus = () => {
    setShowSuggest(true);
  };

  const onSongSelected = (song) => {
    setShowSuggest(false);
    setSongs({
      ...songs,
      [song.id]: song,
    });
    setCurrentSong(song);
    setPlayingStatus(true);
    setPlayerSession(playerSession + 1);

    window.localStorage.setItem(
      'songs',
      JSON.stringify({
        ...songs,
        [song.id]: song,
      })
    );
  };

  const onNextSongClick = (currentSong) => {
    const songIds = Object.keys(songs);
    const currentSongId = songIds.findIndex((id) => id === currentSong.id);
    let nextSongId = currentSongId + 1;

    if (nextSongId === songIds.length) {
      nextSongId = 0;
    }

    setCurrentSong(songs[songIds[nextSongId]]);
    setPlayingStatus(true);
    setPlayerSession(playerSession + 1);
  };

  const onPrevSongClick = (currentSong) => {
    const songIds = Object.keys(songs);
    const currentSongId = songIds.findIndex((id) => id === currentSong.id);
    let prevSongId = currentSongId - 1;

    if (prevSongId < 0) {
      prevSongId = songIds.length - 1;
    }

    setCurrentSong(songs[songIds[prevSongId]]);
    setPlayingStatus(true);
    setPlayerSession(playerSession + 1);
  };

  const searchBarProps = {
    showSuggest,
    onFocus: onSearchFocus,
    onSongSelected,
  };

  const musicPlayerProps = {
    key: playerSession,
    song: currentSong,
    isPlaying: playingStatus,
    onNextBtnClick: onNextSongClick,
    onPrevBtnClick: onPrevSongClick,
  };

  const asideProps = {
    songs: Object.values(songs),
    onSongSelected,
  };

  return (
    <div className='container-fluid' onClick={() => setShowSuggest(false)}>
      <div className='row justify-content-lg-center'>
        <SearchBar {...searchBarProps} />
      </div>
      <div className='row justify-content-lg-center'>
        <MusicPlayer {...musicPlayerProps} />
        {showAside ? <Aside {...asideProps} /> : null}
      </div>
      <div className='row justify-content-lg-center'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
