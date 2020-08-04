import React from 'react';
import _ from 'lodash';
import './App.css';
import SearchBar from './SearchBar';
import MusicPlayer from './MusicPlayer';
import Aside from './Aside';
import { songs } from './testData';

const Footer = () => {
  return <div className="footer col-xl-10 col-lg-12">Footer</div>;
};

const App = () => {
  console.log(Object.values(songs));
  return (
    <div className="container-fluid">
      <div className="row justify-content-lg-center">
        <SearchBar />
      </div>
      <div className="row justify-content-lg-center">
        <MusicPlayer song={songs['ZW6DF66B']} />
        <Aside songs={Object.values(songs)} />
      </div>
      <div className="row justify-content-lg-center">
        <Footer />
      </div>
    </div>
  );
};

export default App;
