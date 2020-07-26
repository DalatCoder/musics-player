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

  render() {
    return <div className="suggest">{this.renderSuggestList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.fetchedSongs };
};

export default connect(mapStateToProps, {
  selectSong,
  playSong,
  hideSuggestBox
})(SuggestBox);
