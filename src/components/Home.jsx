import React from 'react';
import { useSelector } from 'react-redux';
import {setTextFilter} from '../store/actions/filters';
import {eventStore} from '../store/store/configStore';



const Home = () => {
  const state = useSelector(state => state)
  

  const onSubmit = (e) => {
    e.preventDefault();
    eventStore.dispatch(setTextFilter(e.target.textfilter.value))
    console.log(eventStore.getState());
  }
  
  
  return (
  <>
  <h2>Home</h2>
  <form onSubmit={onSubmit}>
    <input name="textfilter" />
    <button type="submit">Filter</button>
  </form>
  </>
)
}

export default Home;
