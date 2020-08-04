import React from 'react';
import './Aside.css';
import { getImageURL, formatDuration } from '../utils';

const Song = ({ song, order }) => {
  const songOrder = order ? <div className="song-order">{order}</div> : null;

  return (
    <div className="song">
      {songOrder}
      <div className="song-photo">
        <img src={getImageURL(song.thumb)} alt={`Thumbnail of ${song.name}`} />
      </div>
      <div className="song-info">
        <div className="title">{song.name}</div>
        <div className="artist">{song.artist}</div>
      </div>
      <div className="song-duration">{formatDuration(song.duration)}</div>
    </div>
  );
};

const Aside = ({ songs }) => {
  return (
    <div className="aside col-xl-5 col-lg-6 col-md-12">
      <div className="list">
        {songs.map((song, idx) => (
          <Song key={song.id} song={song} order={idx + 1} />
        ))}
      </div>
    </div>
  );
};

export default Aside;
