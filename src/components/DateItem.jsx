import React from 'React';
import { deleteDate } from '../store/actions/dates';
import { useSelector } from 'react-redux';
import { dateStore } from '../store/store/configStore';

const DateItem = (props) => {
  const dates = useSelector((state) => state)
  
  return (
  <div className="date-item">
    <p>{props.title}</p>
    <p>{props.body}</p>
    <p>{props.startDate}</p>
    <button onClick={() => dateStore.dispatch(deleteDate(props.id))}>Delete</button>
  </div>
)}

export default DateItem;