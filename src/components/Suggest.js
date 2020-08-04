import React from 'react';
import './Suggest.css';
import Song from './Song';

class Suggest extends React.Component {
  renderSongs(songs, onSongClick) {
    if (!songs) {
      return null;
    }

    if (songs.length === 0) {
      return <div className="suggest-error">Không tìm thấy kết quả</div>;
    }

    return songs.map(song => (
      <Song song={song} key={song.id} onClick={onSongClick} />
    ));
  }

  render() {
    return (
      <div className="suggest">
        {this.renderSongs(this.props.songs, this.props.onSongSelected)}
      </div>
    );
  }
}

export default Suggest;
