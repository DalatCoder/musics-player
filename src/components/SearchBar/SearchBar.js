import React from 'react';
import './SearchBar.css';
import Suggest from '../Suggest/Suggest';
import axios from 'axios';
import { normalizeVietnameseString } from '../../utils';

const fetchSongs = async (term) => {
  const zingurl = `http://ac.mp3.zing.vn/complete?type=artist,song,key,code&num=500&query=${term}`;
  const response = await axios.get(
    // `https://cors-anywhere.herokuapp.com/https://dalatcoder-mp3-app.herokuapp.com/${term}`
    `https://cors-anywhere.herokuapp.com/${zingurl}`
  );

  if (response.data.data.length === 0) {
    return [];
  }

  const songs = response.data.data[0].song;
  return songs.length > 5 ? songs.slice(0, 5) : songs;
};

class SearchBar extends React.Component {
  state = {
    songs: null,
    term: '',
  };
  timeoutId = null;

  onFormSubmit = async (e) => {
    e.preventDefault();

    const songs = await fetchSongs(normalizeVietnameseString(this.state.term));
    this.setState({ songs, term: '' });
  };

  onInputChange = async (e) => {
    this.setState({ term: e.target.value });
    if (
      e.target.value.trim().length === 0 ||
      e.target.value.trim() === this.state.term.trim()
    ) {
      return;
    }

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(async () => {
      const songs = await fetchSongs(
        normalizeVietnameseString(this.state.term)
      );
      this.setState({ songs });
    }, 500);
  };

  render() {
    const searchContainerClassName = `search-container ${
      this.props.showSuggest ? 'show-suggest' : ''
    }`;

    const inputProps = {
      type: 'text',
      id: 'search',
      autoComplete: 'off',
      placeholder: 'Nhập tên bài hát',
      autoCorrect: 'off',
      autoCapitalize: 'off',
      spellCheck: 'false',
      onFocus: this.props.onFocus,
      value: this.state.term,
      onChange: this.onInputChange,
    };

    const suggestProps = {
      songs: this.state.songs,
      onSongSelected: this.props.onSongSelected,
    };

    return (
      <div className='search-bar col-xl-10 col-lg-12'>
        <div
          className={searchContainerClassName}
          onClick={(e) => e.stopPropagation()}
        >
          <form className='form' onSubmit={this.onFormSubmit}>
            <input {...inputProps} />
            <button type='submit' className='btn'>
              <i className='fas fa-search' />
            </button>
          </form>
          {this.props.showSuggest ? <Suggest {...suggestProps} /> : null}
        </div>
      </div>
    );
  }
}

export default SearchBar;
