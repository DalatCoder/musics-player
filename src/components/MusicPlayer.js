import React from 'react';
import './MusicPlayer.css';
import { getImageURL, getSongURL } from '../utils';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: this.props.isPlaying,
      isLoop: false,
      duration: 0,
      current: 0
    };
    this.audioRef = React.createRef();
  }

  onAudioLoad = e => {
    this.setState({
      duration: e.target.duration
    });

    if (this.state.isPlaying) {
      this.audioRef.current.play();
    }
  };

  onTimeUpdate = () => {
    this.setState({
      current: this.audioRef.current.currentTime
    });
  };

  onAudioEnded = () => {
    this.setState({
      isPlaying: false,
      current: 0
    });

    if (this.state.isLoop) {
      this.setState({
        isPlaying: true
      });

      this.playAudio();
    }
  };

  componentDidMount() {
    this.audioRef.current.addEventListener('canplaythrough', this.onAudioLoad);

    this.audioRef.current.addEventListener('timeupdate', this.onTimeUpdate);

    this.audioRef.current.addEventListener('ended', this.onAudioEnded);
  }

  componentWillUnmount() {
    this.audioRef.current.removeEventListener('timeupdate', this.onTimeUpdate);
    this.audioRef.current.removeEventListener('ended', this.onAudioEnded);
    this.audioRef.current.removeEventListener(
      'canplaythrough',
      this.onAudioLoad
    );
  }

  playAudio = () => {
    this.audioRef.current.play();
  };

  pauseAudio = () => {
    this.audioRef.current.pause();
  };

  toggleAudio = () => {
    this.setState({
      isPlaying: !this.state.isPlaying
    });

    return this.state.isPlaying ? this.pauseAudio() : this.playAudio();
  };

  toggleAudioLoop = () => {
    this.setState({
      isLoop: !this.state.isLoop
    });
  };

  onProgressBarClick = event => {
    const progressWidth = event.target.clientWidth;
    const currentWidth = event.nativeEvent.offsetX;
    const duration = this.state.duration;

    this.audioRef.current.currentTime =
      (currentWidth / progressWidth) * duration;
  };

  render() {
    const progressPercent = (this.state.current * 100) / this.state.duration;

    return (
      <div className="main-player col-xl-5 col-lg-6 col-md-12">
        <div
          className={`music-container ${this.state.isPlaying ? 'play' : ''}`}
        >
          <div className="music-info">
            <h4 id="title">{this.props.song.name}</h4>
            <div
              className="progress-container"
              onClick={this.onProgressBarClick}
            >
              <div
                className="progress"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <audio ref={this.audioRef} src={getSongURL(this.props.song.id)} />
          <div className="img-container">
            <img src={getImageURL(this.props.song.thumb)} alt="Music cover" />
          </div>
          <div className="navigation">
            <button className="action-btn">
              <i className="fas fa-backward" />
            </button>
            <button
              onClick={this.toggleAudio}
              className="action-btn action-btn-big"
            >
              <i
                className={`fas fa-${this.state.isPlaying ? 'pause' : 'play'}`}
              />
            </button>
            <button className="action-btn">
              <i className="fas fa-forward" />
            </button>
            <button
              className={`action-btn btn-loop ${
                this.state.isLoop ? 'active' : ''
              }`}
              onClick={this.toggleAudioLoop}
            >
              <i className="fas fa-undo" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicPlayer;
