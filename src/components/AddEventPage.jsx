import React from 'react';
import { addEvent } from '../store/actions/events';
import EventForm from './EventForm'
import { eventStore } from '../store/store/configStore';

const AddEvent = () => (
  <>
  <h3>Add an event</h3>
  <EventForm onSubmit={(data) => eventStore.dispatch(addEvent(data))} />
  </>
)

export default AddEvent