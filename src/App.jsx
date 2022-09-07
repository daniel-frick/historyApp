import React from 'react';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { historyStore } from './store/store/configStore';

const connectedApp = (
  <Provider store={historyStore}>
    <AppRouter />
  </Provider>
);
export default connectedApp;
