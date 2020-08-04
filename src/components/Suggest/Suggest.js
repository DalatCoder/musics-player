import React from 'react';
import './Suggest.css';
import Song from '../Song/Song';

class Suggest extends React.Component {
  renderSongs(songs, onSongClick) {
    if (songs.length === 0) {
      return <div className='suggest-error'>Không tìm thấy kết quả</div>;
    }

    return songs.map((song) => (
      <Song song={song} key={song.id} onClick={onSongClick} />
    ));
  }

  render() {
    if (!this.props.songs) {
      return null;
    }

    return (
      <div className='suggest'>
        {this.renderSongs(this.props.songs, this.props.onSongSelected)}
      </div>
    );
  }
}

export default Suggest;
