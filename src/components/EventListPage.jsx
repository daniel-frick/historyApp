import React, { useEffect } from 'react';
import EventItem from './EventItem';
import { useSelector } from 'react-redux';
import selectEvents from '../store/selectors/visibleEvents';
import FilterForm from './FilterForm';
import { historyStore } from '../store/store/configStore';
import { fetchEvents } from '../store/actions/events';

const EventList = () => {
  const stateEvents = useSelector(state => state.events);
  const stateFilters = useSelector(state => state.filters);
  const stateKeywords = useSelector(state => state.keywords);

  console.log(stateKeywords);

  const selectedEvents = selectEvents(stateEvents, stateFilters);
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
  );
};

export default EventList;
