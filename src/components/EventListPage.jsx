import React from 'react';
import EventItem from './EventItem';
import { useSelector } from 'react-redux';

const EventList = () => {
  const state = useSelector(state => state)
  
  return (
  <>
  <h2>Event List</h2>
  {state.events.map(event => (
    <EventItem {...event} key={event.id} />
  ))}
  </>
)
}

export default EventList