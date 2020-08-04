import React from 'react';
import './Aside.css';
import Song from './Song';

const Aside = ({ songs, onSongSelected }) => {
  return (
    <div className="aside col-xl-5 col-lg-6 col-md-12">
      <div className="list">
        {songs.map((song, idx) => (
          <Song
            key={song.id}
            song={song}
            order={idx + 1}
            onClick={onSongSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default Aside;
