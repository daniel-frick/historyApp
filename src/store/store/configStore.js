import {createStore} from 'redux';
import {dateReducer} from '../reducers/dateReducer'
import '../reducers/dateReducer';
export const dateStore = createStore(dateReducer);