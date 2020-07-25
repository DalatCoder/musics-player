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

export const calcCurrentProgress = (duration, currentTime)=> {
  return {
    type: 'CURRENT_PROGRESS',
    payload: currentTime * 100 / duration
  }
}
