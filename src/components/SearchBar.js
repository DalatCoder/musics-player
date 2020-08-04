import React from 'react';
import './SearchBar.css';
import Suggest from './Suggest';
import { songs } from './testData';

class SearchBar extends React.Component {
  state = {
    songs: Object.values(songs)
  };

  render() {
    const searchContainerClassName = `search-container ${
      this.props.showSuggest ? 'show-suggest' : ''
    }`;

    return (
      <div className="search-bar col-xl-10 col-lg-12">
        <div
          className={searchContainerClassName}
          onClick={e => e.stopPropagation()}
        >
          <form className="form">
            <input
              type="text"
              id="search"
              autoComplete="off"
              placeholder="Nhập tên bài hát"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              onFocus={this.props.onFocus}
            />
            <button type="submit" className="btn">
              <i className="fas fa-search" />
            </button>
          </form>
          {this.props.showSuggest ? (
            <Suggest
              songs={this.state.songs.slice(0, 5)}
              onSongSelected={this.props.onSongSelected}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default SearchBar;
