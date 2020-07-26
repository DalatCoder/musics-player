export default (state = null, action) => {
  switch (action.type) {
    case 'PLAYING':
      return true;

    case 'PAUSING':
      return false;

    default:
      return state;
  }
};
