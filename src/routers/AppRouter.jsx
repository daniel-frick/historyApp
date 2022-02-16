import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AddDate from '../components/AddDate';
import ConnectedDateList from '../components/DateList';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Home from '../components/Home';
import App from '../App';

const AppRouter = () => (
<BrowserRouter>
  <Header/>
  <Navigation />
  <Routes>
   
      <Route index element={<ConnectedDateList />} />
      <Route path="new" element={<AddDate />} />
      <Route path="list" element={<ConnectedDateList />} />

  </Routes>
</BrowserRouter>
)

export default AppRouter;