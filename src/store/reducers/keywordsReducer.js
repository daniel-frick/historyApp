const keywordsDefaultState = [];

export default (state = keywordsDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_KEYWORDS':
      return state.concat(...action.keywordsList);
    case 'UPDATE_KEYWORD_LIST':
      return state.concat(action.keywordsArray);
    default:
      return state;
  }
};
