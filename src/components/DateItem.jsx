import React from 'React';
import { deleteDate } from '../store/actions/dates';
import { dateStore } from '../store/store/configStore';
import { Link } from 'react-router-dom';
import { getFullDateString } from '../utils/displayfunctions';

const DateItem = (props) => {
  
  return (
  <div className="date-item">
    <p className="date">
      <b>{getFullDateString(props)}: {props.title}.</b> {props.body}
    </p>
    <button onClick={() => dateStore.dispatch(deleteDate(props.id))}>Delete</button>
    <Link to={`/edit/${props.id}`}>Edit</Link>

  </div>
)}

export default DateItem;