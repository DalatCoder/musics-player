export default (state = null, action) => {
  switch (action.type) {
    case 'SHOW_SPIN_LOADER':
      return true;

    case 'HIDE_SPIN_LOADER':
      return false;

    default:
      return state;
  }
};
