export default (state = null, action) => {
  switch (action.type) {
    case 'HIDE_SUGGEST_BOX':
      return false;

    case 'SHOW_SUGGEST_BOX':
      return true;

    default:
      return state;
  }
};
