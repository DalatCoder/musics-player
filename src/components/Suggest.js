import React from 'react';
import './Suggest.css';
import Song from './Song';

class Suggest extends React.Component {
  renderSongs(songs) {
    if (songs.length === 0) {
      return <div className="suggest-error">Không tìm thấy kết quả</div>;
    }

    return songs.map(song => <Song song={song} key={song.id} />);
  }

  render() {
    return <div className="suggest">{this.renderSongs(this.props.songs)}</div>;
  }
}

export default Suggest;
