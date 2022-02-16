import React from 'react';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { addDate } from './store/actions/dates'
import { dateStore } from './store/store/configStore';

for (let i = 0; i <= 3; i++) {
  dateStore.dispatch(addDate({
  startDate:i,
  endDate:i+1,
  title: 'title: ' + i,
  body: 'body: ' + i,
  footnotes: 'no footnotes: ' + i
}))
}


const connectedApp = (
  <Provider store={dateStore}>
    <AppRouter />
  </Provider>
)
export default connectedApp