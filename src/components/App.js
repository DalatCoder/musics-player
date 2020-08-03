import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import MusicPlayer from './MusicPlayer';

const Aside = () => {
  return (
    <div className="col-xl-5 col-lg-6 col-md-12">Aside</div>
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
