import {createStore, combineReducers} from 'redux';
import events from '../reducers/eventReducer'
import filters from '../reducers/filterReducer'

export const eventStore = createStore(
  combineReducers({
    events,
    filters
  }))