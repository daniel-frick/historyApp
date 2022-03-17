import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
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
import { eventStore } from '../store/store/configStore';
import { fetchData } from '../store/actions/events';

const AppRouter = () => {
    useEffect(() => {
    console.log('fetching data on start');
    eventStore.dispatch(fetchData())
  }, []);

  // const state = useSelector(state => state.events)

  // useEffect(() => {
  //   console.log('fetching data on state change');
  //   eventStore.dispatch(fetchData())
  //   console.log('data fetched on state change');
  // }, [state]);
  
  return (
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
)}

export default AppRouter;