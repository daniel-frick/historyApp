import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEventPage from '../components/AddEventPage';
import ConnectedEventList from '../components/EventListPage';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import EditEventPage from '../components/EditEventPage';
import { historyStore } from '../store/store/configStore';
import { fetchEvents } from '../store/actions/events';
import { fetchKeywords } from '../store/actions/keywords';

const AppRouter = () => {
  useEffect(() => {
    historyStore.dispatch(fetchEvents());

    historyStore.dispatch(fetchKeywords());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Routes>
        <Route index element={<ConnectedEventList />} />
        <Route path="new" element={<AddEventPage />} />
        <Route path="list" element={<ConnectedEventList />} />
        <Route path="edit/:id" element={<EditEventPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
