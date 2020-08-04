import React from 'react';
import _ from 'lodash';
import './App.css';
import SearchBar from './SearchBar';
import MusicPlayer from './MusicPlayer';
import Aside from './Aside';
import Footer from './Footer';
import { songs } from './testData';

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
