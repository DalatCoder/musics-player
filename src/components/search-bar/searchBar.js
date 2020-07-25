import './searchBar.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchSongs, showSuggestBox } from '../../actions';
import SuggestBox from './suggestBox';
import { normalizeVietnameseString } from '../../utils';

class SearchBar extends React.Component {
  state = { term: '' };

  onSearchSubmit = event => {
    event.preventDefault();
    this.props.fetchSongs(normalizeVietnameseString(this.state.term));
    this.setState({ term: '' });
  };

  render() {
    return (
      <div
        className={`search-container ${
          this.props.showSuggest ? 'show-suggest' : ''
        }`}
      >
        <form className="form" onSubmit={this.onSearchSubmit}>
          <input
            type="text"
            autoComplete="off"
            placeholder="Nhập tên bài hát"
            spellCheck="false"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
            onFocus={() => this.props.showSuggestBox()}
          />

          <button type="submit" className="btn">
            <i className="fas fa-search"></i>
          </button>
        </form>

        <div className="suggest">
          <SuggestBox />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSuggest: state.showSuggest
  };
};

export default connect(mapStateToProps, {
  fetchSongs,
  showSuggestBox
})(SearchBar);
