import { combineReducers } from 'redux';

const playStatusReducer = (state = null, action) => {
  switch (action.type) {
    case 'PLAYING':
      return true;

    case 'PAUSING':
      return false;

    default:
      return state;
  }
};

const INITIAL_SONG = {
  title: 'Ukulele',
  cover: 'assets/images/ukulele.jpg',
  src: 'assets/music/ukulele.mp3',
  author: 'unknown',
  duration: '146'
};
const songReducer = (state = INITIAL_SONG, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;

    default:
      return state;
  }
};

const progressReducer = (state = 0, action) => {
  switch (action.type) {
    case 'CURRENT_PROGRESS':
      return action.payload;

    default:
      return state;
  }
};

const songsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SONGS':
      return action.payload;

    default:
      return state;
  }
};

const suggestBoxReducer = (state = null, action) => {
  switch (action.type) {
    case 'HIDE_SUGGEST_BOX':
      return false;

    case 'SHOW_SUGGEST_BOX':
      return true;

    default:
      return state;
  }
};

export default combineReducers({
  isPlaying: playStatusReducer,
  currentSong: songReducer,
  progressPercent: progressReducer,
  fetchedSongs: songsReducer,
  showSuggest: suggestBoxReducer
});
