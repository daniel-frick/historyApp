import React from 'react';
import { editEvent } from '../store/actions/events';
import EventForm from './EventForm'
import { eventStore } from '../store/store/configStore';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const EditEventPage = () => {
  const {id} = useParams()
  const eventObject= useSelector(state => state).find(eventObject => eventObject.id === id)

  return (
  <>
  <h3>Edit event</h3>
  <EventForm
    eventObject={eventObject}
    onSubmit={(data) => eventStore.dispatch(editEvent(id, data))} />
  </>
)}

export default EditEventPage