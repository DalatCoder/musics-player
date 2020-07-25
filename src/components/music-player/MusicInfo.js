import './MusicInfo.css';
import React from 'react';
import { connect } from 'react-redux';

class MusicInfo extends React.Component {
  render() {
    return (
      <div className="music-info">
        <h4>{this.props.song.title}</h4>
        <div className="progress-container">
          <div
            className="progress"
            style={{ width: `${this.props.progressPercent}%` }}
          ></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { song: state.currentSong, progressPercent: state.progressPercent };
};

export default connect(mapStateToProps)(MusicInfo);
