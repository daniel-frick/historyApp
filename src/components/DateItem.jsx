import React from 'React';
import { deleteDate } from '../store/actions/dates';
import { useSelector } from 'react-redux';
import { dateStore } from '../store/store/configStore';

const DateItem = (props) => {
  // const dates = useSelector((state) => state)
  
  return (
  <div className="date-item">
    <p className="date">
      <b>
    {props.startDate.toFormat('yyyy/MM/dd')}
    {!props.startDate.hasSame(props.endDate, "day") && <span>&#8211;</span>}
    {!props.startDate.hasSame(props.endDate, "year") && props.endDate.year + '/'}
    {!props.startDate.hasSame(props.endDate, "month") && props.endDate.month.toString().padStart(2,'0') + '/'}
    {!props.startDate.hasSame(props.endDate, "day") && props.endDate.day.toString().padStart(2,'0')}
    : {props.title}.</b> {props.body}</p>
    <button onClick={() => dateStore.dispatch(deleteDate(props.id))}>Delete</button>
  </div>
)}

export default DateItem;