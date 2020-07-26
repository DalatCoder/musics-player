import './SearchBar.css';
import React from 'react';
import { connect } from 'react-redux';
import {
  fetchSongsAndStatus,
  showSuggestBox,
  hideSuggestBox
} from '../../actions';
import SuggestBox from './SuggestBox';
import { normalizeVietnameseString } from '../../utils';

class SearchBar extends React.Component {
  state = { term: '' };
  timeoutId = undefined;

  onInputChange = event => {
    this.setState({ term: event.target.value });

    const { fetchSongsAndStatus } = this.props;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      fetchSongsAndStatus(normalizeVietnameseString(this.state.term));
    }, 1000);
  };

  onSearchSubmit = event => {
    event.preventDefault();
    this.props.fetchSongsAndStatus(normalizeVietnameseString(this.state.term));
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
            onChange={this.onInputChange}
            onFocus={() => this.props.showSuggestBox()}
            onBlur={() => this.props.hideSuggestBox()}
          />

          <button type="submit" className="btn">
            <i className="fas fa-search"></i>
          </button>
        </form>

        <SuggestBox />
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
  fetchSongsAndStatus,
  showSuggestBox,
  hideSuggestBox
})(SearchBar);
