const keywordsDefaultState = [];

export default (state = keywordsDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_KEYWORDS':
      return state.concat(...action.keywordsList);
    case 'CHECK_KEYWORD':
      return state.concat(action.keywordsArray);
    default:
      return state;
  }
};
