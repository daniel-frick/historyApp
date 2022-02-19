import React from 'react';
import DateItem from './DateItem';
import { useSelector } from 'react-redux';

const DateList = () => {
  const dates = useSelector(state => state)
  
  return (
  <>
  <h2>Date List</h2>
  {dates.map(date => (
    <DateItem {...date} key={date.id} />
  ))}
  </>
)
}

export default DateList