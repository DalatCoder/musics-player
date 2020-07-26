export default (state = null, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return true;

    case 'FETCH_FAIL':
      return false;

    default:
      return state;
  }
};
