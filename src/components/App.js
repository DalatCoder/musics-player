import React from 'react';
import './App.css';
import SearchBar from './SearchBar';

const MusicPlayer = () => {
  return (
    <div className="main-player col-xl-4 col-lg-5 col-md-5 col-sm-12">
      MusicPlayer
    </div>
  );
};

const Aside = () => {
  return (
    <div className="aside col-xl-6 col-lg-7 col-md-7 col-sm-12 ">Aside</div>
  );
};

const Footer = () => {
  return <div className="footer col-xl-10 col-lg-12">Footer</div>;
};

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-lg-center">
        <SearchBar />
      </div>
      <div className="row justify-content-lg-center">
        <MusicPlayer />
        <Aside />
      </div>
      <div className="row justify-content-lg-center">
        <Footer />
      </div>
    </div>
  );
};

export default App;
