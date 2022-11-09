const keywordsDefaultState = [];

export default (state = keywordsDefaultState, action) => {
  switch (action.type) {
    case 'ADD_KEYWORD':
      return state.concat(action.keywordsData);
    default:
      return state;
  }
};
