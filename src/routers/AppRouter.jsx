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
import EditDate from '../components/EditDate';

const AppRouter = () => (
<BrowserRouter>
  <Header/>
  <Navigation />
  <Routes>
   
      <Route index element={<Home />} />
      <Route path="new" element={<AddDate />} />
      <Route path="list" element={<ConnectedDateList />} />
      <Route path="edit/:id" element={<EditDate />} />

  </Routes>
</BrowserRouter>
)

export default AppRouter;