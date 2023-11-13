const keywordsDefaultState = [];

export default (state = keywordsDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_KEYWORDS':
      return state.concat(...action.keywordsList);
    case 'UPDATE_KEYWORD_LIST':
      return state.concat(action.keywordsArray);
    case 'UPDATE_KEYWORD':
      return state.map(kw => {
        if (kw.id === action.id) {
          return {
            ...kw,
            ...action.updates,
          };
        } else {
          return kw;
        }
      });
    default:
      return state;
  }
};
