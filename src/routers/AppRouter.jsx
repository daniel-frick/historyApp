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
    console.log('fetching events on start');
    historyStore.dispatch(fetchEvents());
    console.log('fetching keywords on start');
    historyStore.dispatch(fetchKeywords());
  }, []);

  // const state = useSelector(state => state.events)

  // useEffect(() => {
  //   console.log('fetching data on state change');
  //   eventStore.dispatch(fetchData())
  //   console.log('data fetched on state change');
  // }, [state]);

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
