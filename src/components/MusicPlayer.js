import React from 'react';
import './MusicPlayer.css';

const song = {
  hasVideo: 'false',
  thumb: 'avatars/7/1/71e884a8168fa5a3a8c596dca8d30193_1473737667.jpg',
  artist: 'Mr Siro',
  streamingStatus: '1',
  thumbVideo: '',
  genreIds: '1,8,12109',
  disable_platform_web: 'false',
  artistIds: 'IWZ98609',
  disSPlatform: '0',
  duration: '299',
  radioPid: 'ZEEZ8Z7D',
  zing_choice: 'false',
  name: 'Day Dứt Nỗi Đau',
  block: 'false',
  id: 'ZW6DF66B',
  disDPlatform: '0'
};

const getImageURL = imageRelativeURL => {
  return `https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/${imageRelativeURL}`;
};

const getSongURL = songId => {
  return `http://api.mp3.zing.vn/api/streaming/audio/${songId}/320`;
};

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      duration: 0,
      current: 0
    };
    this.audioRef = React.createRef();
  }

  componentDidMount() {
    this.audioRef.current.addEventListener('canplaythrough', e => {
      this.setState({
        duration: e.target.duration
      });
    });

    this.audioRef.current.addEventListener('timeupdate', () => {
      this.setState({
        current: this.audioRef.current.currentTime
      });
    });

    this.audioRef.current.addEventListener('end', this.pauseAudio);
  }

  componentWillUnmount() {
    this.audioRef.current.removeEventListener('end');
    this.audioRef.current.removeEventListener('canplaythrough');
    this.audioRef.current.removeEventListener('timeupdate');
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

  render() {
    const progressPercent = (this.state.current * 100) / this.state.duration;

    return (
      <div className="main-player col-xl-5 col-lg-6 col-md-12">
        <div
          className={`music-container ${this.state.isPlaying ? 'play' : ''}`}
        >
          <div className="music-info">
            <h4 id="title">{song.name}</h4>
            <div className="progress-container">
              <div
                className="progress"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <audio ref={this.audioRef} src={getSongURL(song.id)} />
          <div className="img-container">
            <img src={getImageURL(song.thumb)} alt="Music cover" />
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
            <button className="action-btn">
              <i className="fas fa-undo" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicPlayer;
