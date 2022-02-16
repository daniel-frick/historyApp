const datesDefaultState = []

export const dateReducer = (state = datesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DATE':
      return state.concat(action.date)
    case 'DELETE_DATE':
      return state.filter(date => date.id != action.id)
  }
}