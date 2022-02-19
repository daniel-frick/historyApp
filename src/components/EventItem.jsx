import React from 'React';
import { deleteEvent } from '../store/actions/events';
import { eventStore } from '../store/store/configStore';
import { Link } from 'react-router-dom';
import { getFullDateString } from '../utils/displayfunctions';

const EventItem = (props) => {
  
  return (
  <div className="event-item">
    <p className="event">
      <b>{getFullDateString(props)}: {props.title}.</b> {props.body}
    </p>
    <button onClick={() => eventStore.dispatch(deleteEvent(props.id))}>Delete</button>
    <Link to={`/edit/${props.id}`}>Edit</Link>

  </div>
)}

export default EventItem;