import React from 'react'
import { getImageURL, formatDuration } from '../utils'

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

export default Song;
