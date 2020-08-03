import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar col-xl-10 col-lg-12">
      <div className="search-container">
        <form className="form" id="form">
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
        <div id="suggest" className="suggest" />
      </div>
    </div>
  );
};

export default SearchBar;
