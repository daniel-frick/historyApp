import React, {useEffect} from 'react';
import EventItem from './EventItem';
import { useSelector } from 'react-redux';
import selectEvents from '../store/selectors/visibleEvents';
import FilterForm from './FilterForm'
import { eventStore } from '../store/store/configStore';
import {fetchData} from '../store/actions/events';


const EventList = () => {
  const env = import.meta.env
  console.log(env.SNOWPACK_PUBLIC_ENABLE_FEATURE)

  // fetch(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_URL}/users`).then(console.log('susc'))
  // useEffect(() => {
  //   console.log('fetching data');
  //   eventStore.dispatch(fetchData())
  //   console.log('data fetched');
  // }, []);

  // const state = eventStore.getState()
  
  // const selectedEvents = selectEvents(state.events, state.filters)

  const state = useSelector(state => state)
  
  return (
  <>
  <h2>Event List</h2>
  <div>
  <FilterForm />
  </div>
  <p></p>
  
  {state.events.map(event => (
    <EventItem {...event} key={event.id} />
  ))}
  </>
)
}

export default EventList