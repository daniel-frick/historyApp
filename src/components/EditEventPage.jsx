import React from 'react';
import { editEvent } from '../store/actions/events';
import EventForm from './EventForm'
import { eventStore } from '../store/store/configStore';
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const EditEventPage = () => {
  let navigate = useNavigate();
  const {id} = useParams()
  const events = useSelector(state => state.events)
  const eventObject = events.find(eventObject => eventObject.id === id)

  return (
  <>
  <h3>Edit event</h3>
  <EventForm
    eventObject={eventObject}
    onSubmit={(data) => {
      eventStore.dispatch(editEvent(id, data));
      navigate('/list')
    }}

  />
  </>
)}

export default EditEventPage