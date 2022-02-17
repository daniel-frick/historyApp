import React from 'react';
import {DateTime} from 'luxon';

const Home = () => {

  const date = DateTime.local(2022,2,2)
  const daysInMonth = date.daysInMonth
  
  
  return (
  <>
  <h2>Home</h2>
  <p>{date.toString()}</p>
  <p>{daysInMonth.toString()}</p>
  </>
)
}

export default Home;
