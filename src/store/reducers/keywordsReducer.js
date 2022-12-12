const keywordsDefaultState = [];

export default (state = keywordsDefaultState, action) => {
  switch (action.type) {
    case 'CHECK_KEYWORD':
      console.log(action.keywordsArray);
    // return state.concat(action.keywordsData);
    default:
      return state;
  }
};
