import React from 'react';
import './SearchBar.css';
import Suggest from './Suggest';
import axios from 'axios';
import { normalizeVietnameseString } from '../utils';

const fetchSongs = async term => {
  const response = await axios.get(
    `https://dalatcoder-mp3-app.herokuapp.com/${term}`
  );

  return response.data.data;
};

class SearchBar extends React.Component {
  state = {
    songs: null,
    term: ''
  };

  onFormSubmit = async e => {
    e.preventDefault();

    const songs = await fetchSongs(normalizeVietnameseString(this.state.term));
    this.setState({ songs, term: '' });
  };

  onInputChange = async e => {
    this.setState({ term: e.target.value });

    let timeoutId;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setTimeout(async () => {
      const songs = await fetchSongs(
        normalizeVietnameseString(this.state.term)
      );
      this.setState({ songs });
    }, 700);
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
          <form className="form" onSubmit={this.onFormSubmit}>
            <input
              type="text"
              id="search"
              autoComplete="off"
              placeholder="Nhập tên bài hát"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              onFocus={this.props.onFocus}
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <button type="submit" className="btn">
              <i className="fas fa-search" />
            </button>
          </form>
          {this.props.showSuggest ? (
            <Suggest
              songs={this.state.songs}
              onSongSelected={this.props.onSongSelected}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default SearchBar;
