import React from 'react';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import {eventStore}  from './store/store/configStore';

const connectedApp = (
  <Provider store={eventStore}>
    <AppRouter />
  </Provider>
)
export default connectedApp