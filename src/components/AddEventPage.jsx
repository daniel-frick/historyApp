import React from 'react';
import { addEvent } from '../store/actions/events';
import EventForm from './EventForm';
import { historyStore } from '../store/store/configStore';
import { useNavigate } from 'react-router-dom';

const AddEventPage = () => {
  let navigate = useNavigate();
  return (
    <>
      <h3>Add an event</h3>
      <EventForm
        onSubmit={data => {
          historyStore.dispatch(addEvent(data));
          navigate('/list');
        }}
      />
    </>
  );
};

export default AddEventPage;
