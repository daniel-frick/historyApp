const keywordsDefaultState = [];

export default (state = keywordsDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_KEYWORDS':
      return state.concat(...action.keywordsList);
    case 'ADD_KEYWORD':
      return state.concat(action.kwData);
    case 'DELETE_KEYWORD':
      return state.filter(kw => kw.id != action.id);
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
