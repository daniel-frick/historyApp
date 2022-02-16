import React from 'react';
import DateItem from './DateItem';
import { useSelector } from 'react-redux';

const DateList = () => {
  const dates = useSelector((state) => state)

  console.log(dates)

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
// const mapStateToProps = (state) => ({dates: state})

// export default connect(mapStateToProps)(DateList) 