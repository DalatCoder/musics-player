const INITIAL_SONG = {
  title: 'Ukulele',
  cover: 'assets/images/ukulele.jpg',
  src: 'assets/music/ukulele.mp3',
  author: 'unknown',
  duration: '146'
};

export default (state = INITIAL_SONG, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;

    default:
      return state;
  }
};
