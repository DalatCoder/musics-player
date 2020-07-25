import './MusicPlayer.css';
import React from 'react';
import { connect } from 'react-redux';

import MusicInfo from './MusicInfo';
import MusicCover from './MusicCover';
import MusicControl from './MusicControl';
import Audio from './Audio';

const MusicPlayer = props => {
  return (
    <div className={`music-container ${props.isPlaying ? 'play' : ''}`}>
      <MusicInfo />

      <Audio />

      <MusicCover />

      <MusicControl />
    </div>
  );
};

const mapStateToProps = state => {
  return { isPlaying: state.isPlaying };
};

export default connect(mapStateToProps)(MusicPlayer);
