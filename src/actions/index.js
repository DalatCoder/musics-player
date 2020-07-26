import zingmp3 from '../apis/zingmp3';
import { getAudioURL, getCoverURL, formatDuration } from '../utils';

export const playSong = () => {
  return {
    type: 'PLAYING'
  };
};

export const pauseSong = () => {
  return {
    type: 'PAUSING'
  };
};

export const selectSong = song => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

export const calcCurrentProgress = (duration, currentTime) => {
  return {
    type: 'CURRENT_PROGRESS',
    payload: (currentTime * 100) / duration
  };
};

export const hideSuggestBox = () => {
  return {
    type: 'HIDE_SUGGEST_BOX'
  };
};

export const showSuggestBox = () => {
  return {
    type: 'SHOW_SUGGEST_BOX'
  };
};

export const fetchSongsAndStatus = title => async (dispatch, getState) => {
  dispatch(showSpinLoader());
  await dispatch(fetchSongs(title));
  dispatch(hideSpinLoader());

  const songs = getState().fetchedSongs;
  if (songs.length === 0) {
    dispatch(failFetchSongs());
  } else {
    dispatch(successFetchSongs());
  }
};

export const fetchSongs = title => async dispatch => {
  const response = await zingmp3.get(`/`, {
    params: {
      query: title
    }
  });

  const songs = response.data.data || [];

  const formattedSongs = songs.map(song => {
    return {
      title: song.name,
      cover: getCoverURL(song.thumb),
      src: getAudioURL(song.id),
      artist: song.artist,
      duration: formatDuration(song.duration),
      id: song.id
    };
  });

  dispatch({ type: 'FETCH_SONGS', payload: formattedSongs });
};

export const successFetchSongs = () => {
  return {
    type: 'FETCH_SUCCESS'
  };
};

export const failFetchSongs = () => {
  return {
    type: 'FETCH_FAIL'
  };
};

export const hideSpinLoader = () => {
  return {
    type: 'HIDE_SPIN_LOADER'
  };
};

export const showSpinLoader = () => {
  return {
    type: 'SHOW_SPIN_LOADER'
  };
};
