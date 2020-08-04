import React from 'react';
import './Aside.css';
import Song from '../Song/Song';

const Aside = ({ songs, onSongSelected }) => {
  const getSongProps = (song, index) => {
    return {
      key: song.id,
      song: song,
      order: index + 1,
      onClick: onSongSelected,
    };
  };

  const renderSongs = (songs) => {
    return songs.map((song, idx) => <Song {...getSongProps(song, idx)} />);
  };

  return (
    <div className='aside col-xl-5 col-lg-6 col-md-12'>
      <div className='list'>{renderSongs(songs)}</div>
    </div>
  );
};

export default Aside;
