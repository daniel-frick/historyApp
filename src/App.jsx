import React from 'react';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { addDate } from './store/actions/dates'
import { dateStore } from './store/store/configStore';
import { DateTime } from 'luxon';

const events = ['Normalisierung mit VAE', 'Regierungsbildung Bennett', 'Lapid übernimmt']

for (let i = 1; i <= 3; i++) {
  dateStore.dispatch(addDate({
  startDate: DateTime.local(2012,i+5,i),
  endDate:DateTime.local(2012+i,i+7,i+2),
  title: events[i-1],
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