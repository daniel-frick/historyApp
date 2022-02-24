const filterDefaultState = {text: '', startYearFilter:0, endYearFilter:0}

export default (state = filterDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text}
    case 'SET_START_YEAR':
      return {...state, startYearFilter: action.startYearFilter}
    case 'SET_END_YEAR':
      return {...state, endYearFilter: action.endYearFilter}
    default:
      return state
    }
}