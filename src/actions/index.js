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

export const fetchSongs = title => async dispatch => {
  const response = await zingmp3.get(`/${title}`);

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
