import './MusicControl.css';
import React from 'react';
import { connect } from 'react-redux';

import { playSong, pauseSong } from '../../actions';

class MusicControl extends React.Component {
  onPlaySong = () => {
    this.props.playSong();
  };

  onPauseSong = () => {
    this.props.pauseSong();
  };

  togglePlayButton(playing) {
    if (playing) {
      return (
        <button
          className="action-btn action-btn-big"
          onClick={this.onPauseSong}
        >
          <i className="fas fa-pause"></i>
        </button>
      );
    }
    return (
      <button className="action-btn action-btn-big" onClick={this.onPlaySong}>
        <i className="fas fa-play"></i>
      </button>
    );
  }

  render() {
    const { isPlaying } = this.props;

    return (
      <div className="navigation">
        <button className="action-btn">
          <i className="fas fa-backward"></i>
        </button>
        {this.togglePlayButton(isPlaying)}
        <button className="action-btn">
          <i className="fas fa-forward"></i>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isPlaying: state.isPlaying };
};

export default connect(mapStateToProps, { playSong, pauseSong })(MusicControl);
