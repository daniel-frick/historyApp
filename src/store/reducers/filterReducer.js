const filterDefaultState = {text: '', startDate:0}

export default (state = filterDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      console.log(state)
      console.log(action.text)
      return {...state, text: action.text}
    default:
      return state
    }
}