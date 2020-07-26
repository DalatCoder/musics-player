export default (state = 0, action) => {
  switch (action.type) {
    case 'CURRENT_PROGRESS':
      return action.payload;

    default:
      return state;
  }
};
