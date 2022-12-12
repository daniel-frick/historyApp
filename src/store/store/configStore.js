import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import events from '../reducers/eventReducer';
import filters from '../reducers/filterReducer';
import keywords from '../reducers/keywordsReducer';

export const historyStore = createStore(
  combineReducers({
    events,
    filters,
    keywords,
  }),
  applyMiddleware(thunk)
);
