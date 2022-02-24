import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AddEventPage from '../components/AddEventPage';
import ConnectedEventList from '../components/EventListPage';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import EditEventPage from '../components/EditEventPage';

const AppRouter = () => (
<BrowserRouter>
  <Header/>
  <Navigation />
  <Routes>
   
      <Route index element={<ConnectedEventList />} />
      <Route path="new" element={<AddEventPage />} />
      <Route path="list" element={<ConnectedEventList />} />
      <Route path="edit/:id" element={<EditEventPage />} />

  </Routes>
</BrowserRouter>
)

export default AppRouter;