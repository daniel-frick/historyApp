import {createStore} from 'redux';
import {eventReducer} from '../reducers/eventReducer'
import '../reducers/eventReducer';
export const eventStore = createStore(eventReducer);