import './MusicCover.css';
import React from 'react';
import { connect } from 'react-redux';

const MusicCover = props => {
  const { song } = props;

  return (
    <div className="img-container">
      <img src={song.cover} alt={`${song.title} cover`} />
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.currentSong };
};

export default connect(mapStateToProps)(MusicCover);
