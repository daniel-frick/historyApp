const eventsDefaultState = []

export const eventReducer = (state = eventsDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return state.concat(action.event)
    case 'DELETE_EVENT':
      return state.filter(event => event.id != action.id)
    case 'EDIT_EVENT':
      return state.map(event => {
        if (event.id === action.id) {
          return {
            ...event,
            ...action.updates
          };
        } else {
          return event
        }
      })
    default:
      return state
    }
}