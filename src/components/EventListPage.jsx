import React from 'react';
import EventItem from './EventItem';
import { useSelector } from 'react-redux';
import selectEvents from '../store/selectors/visibleEvents';
import FilterForm from './FilterForm'

const EventList = () => {
  const state = useSelector(state => state)
  const selectedEvents = selectEvents(state.events, state.filters)

  
  return (
  <>
  <h2>Event List</h2>
  <div>
  <FilterForm />
  </div>
  <p></p>

  {selectedEvents.map(event => (
    <EventItem {...event} key={event.id} />
  ))}
  </>
)
}

export default EventList