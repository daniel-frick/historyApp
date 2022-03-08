let vantageYearStandard = new Date().getFullYear()
const filterDefaultState = {text: '', startYearFilter:0, endYearFilter:0, jubilee:0, vantageYear:vantageYearStandard}

export default (state = filterDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text}
    case 'SET_START_YEAR':
      return {...state, startYearFilter: action.startYearFilter}
    case 'SET_END_YEAR':
      return {...state, endYearFilter: action.endYearFilter}
    case 'SET_JUBILEE':
      return {...state, jubilee: action.period}
    case 'SET_VANTAGE_YEAR':
      return {...state, vantageYear: action.vantageYear}
    default:
      return state
    }
}