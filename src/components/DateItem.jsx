import React from 'React';
import { deleteDate } from '../store/actions/dates';
import { dateStore } from '../store/store/configStore';
import {Link} from 'react-router-dom';

const DateItem = (props) => {

  const getDateString = (props) => {
    let dateString = props.startDate.year.toString()

    if (props.withMonth) {
      dateString += '/' + props.startDate.month.toString().padStart(2,'0')
    }
    if (props.withDay) {
      dateString += '/' + props.startDate.day.toString().padStart(2,'0')
    }
    if (!props.startDate.hasSame(props.endDate, "day")) {
      dateString += String.fromCharCode(0x2013)
    }
    if (!props.startDate.hasSame(props.endDate, "year")) {
      dateString += props.endDate.year.toString() + '/'
    }
    if (!props.startDate.hasSame(props.endDate, "month")) {
      dateString += props.endDate.month.toString().padStart(2,'0') + '/'
    }
    if (!props.startDate.hasSame(props.endDate, "day")) {
      dateString += props.endDate.day.toString().padStart(2,'0')
    }
    return dateString
  }
  
  return (
  <div className="date-item">
    <p className="date">
      <b>{getDateString(props)}: {props.title}.</b> {props.body}
    </p>
    <button onClick={() => dateStore.dispatch(deleteDate(props.id))}>Delete</button>
    <Link to={`/edit/${props.id}`}>Edit</Link>

  </div>
)}

export default DateItem;