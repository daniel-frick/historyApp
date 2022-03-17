import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import events from '../reducers/eventReducer'
import filters from '../reducers/filterReducer'

export const eventStore = createStore(
  combineReducers({
    events,
    filters
  }), applyMiddleware(thunk))


