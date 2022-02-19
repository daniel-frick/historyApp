const datesDefaultState = []

export const dateReducer = (state = datesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DATE':
      return state.concat(action.date)
    case 'DELETE_DATE':
      return state.filter(date => date.id != action.id)
    case 'EDIT_DATE':
      return state.map(date => {
        if (date.id === action.id) {
          return {
            ...date,
            ...action.updates
          };
        } else {
          return date
        }
      })
    default:
      return state
    }
}