import React from 'react';
import './SearchBar.css';
import Suggest from './Suggest';
import { songs } from './testData';

class SearchBar extends React.Component {
  state = {
    showSuggest: true,
    songs: Object.values(songs)
  };

  render() {
    return (
      <div className="search-bar col-xl-10 col-lg-12">
        <div
          className={`search-container ${
            this.state.showSuggest ? 'show-suggest' : ''
          }`}
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
            />
            <button type="submit" className="btn">
              <i className="fas fa-search" />
            </button>
          </form>
          {this.state.showSuggest ? (
            <Suggest songs={this.state.songs.slice(0, 5)} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default SearchBar;
