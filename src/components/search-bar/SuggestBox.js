import './SuggestBox.css';
import React from 'react';
import { connect } from 'react-redux';
import { selectSong, playSong, hideSuggestBox } from '../../actions';

class SuggestBox extends React.Component {
  onSongClick = song => {
    this.props.selectSong(song);
    this.props.playSong();
    this.props.hideSuggestBox();
  };

  renderErrorNotification = () => {
    console.log('Error');
    return <div className="error-message">Không tìm thấy bài hát!</div>;
  };

  renderSuggestList = () => {
    return this.props.songs.map(song => {
      return (
        <div className="song" key={song.id}>
          <div className="song-photo">
            <img src={song.cover} alt={`${song.title} cover`} />
          </div>
          <div className="song-info">
            <div className="title">
              <p onClick={() => this.onSongClick(song)}>{song.title}</p>
            </div>
            <div className="artist">
              <span>{song.artist}</span>
            </div>
          </div>
          <div className="song-duration">
            <span>{song.duration}</span>
          </div>
        </div>
      );
    });
  };

  renderContent = () => {
    if (this.props.canFetchSong === null) {
      return null;
    }

    if (this.props.canFetchSong === true) {
      return this.renderSuggestList();
    }

    return this.renderErrorNotification();
  };

  render() {
    return <div className="suggest">{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    songs: state.fetchedSongs,
    canFetchSong: state.canFetchSong
  };
};

export default connect(mapStateToProps, {
  selectSong,
  playSong,
  hideSuggestBox
})(SuggestBox);
