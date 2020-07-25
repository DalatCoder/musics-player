import React from 'react';
import { connect } from 'react-redux';
import { pauseSong, calcCurrentProgress } from '../actions';

class MusicAudio extends React.Component {
  audio = new Audio(this.props.song.src);

  componentDidMount() {
    this.audio.addEventListener('ended', () => this.props.pauseSong());
    this.audio.addEventListener('timeupdate', () => {
      this.props.calcCurrentProgress(
        this.audio.duration,
        this.audio.currentTime
      );
    });
  }

  render() {
    if (this.props.isPlaying) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
    return null;
  }
}

const mapStateToProps = state => {
  return { song: state.currentSong, isPlaying: state.isPlaying };
};

export default connect(mapStateToProps, {
  pauseSong,
  calcCurrentProgress
})(MusicAudio);
