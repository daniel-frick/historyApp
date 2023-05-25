const eventsDefaultState = [];

export default (state = eventsDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_EVENT':
      return state.concat(action.eventsList);
    case 'ADD_EVENT':
      return state.concat(action.eventData);
    case 'DELETE_EVENT':
      return state.filter(event => event.id != action.id);
    case 'EDIT_EVENT':
      return state.map(event => {
        if (event.id === action.id) {
          return {
            ...event,
            ...action.updates,
          };
        } else {
          return event;
        }
      });
    default:
      return state;
  }
};
