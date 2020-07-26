import { combineReducers } from 'redux';
import playStatusReducer from './playStatusReducer';
import songReducer from './songReducer';
import songsReducer from './songsReducer';
import fetchSongsStatusReducer from './fetchSongStatusReducer';
import progressReducer from './progressReducer';
import suggestBoxReducer from './suggestBoxReducer';
import spinLoaderReducer from './spinLoaderReducer';

export default combineReducers({
  isPlaying: playStatusReducer,
  currentSong: songReducer,
  progressPercent: progressReducer,
  showSuggest: suggestBoxReducer,
  fetchedSongs: songsReducer,
  canFetchSong: fetchSongsStatusReducer,
  showSpinLoader: spinLoaderReducer
});
