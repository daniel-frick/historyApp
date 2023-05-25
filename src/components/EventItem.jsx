import React from 'React';
import Keyword from './Keyword';
import { deleteEvent } from '../store/actions/events';
import { historyStore } from '../store/store/configStore';
import { Link } from 'react-router-dom';
import { getFullDateString } from '../utils/displayfunctions';

const EventItem = props => {
  return (
    <div className="event-item">
      <p className="event">
        <b>
          {getFullDateString(props)}: {props.title}.
        </b>{' '}
        {props.body}
      </p>
      <button onClick={() => historyStore.dispatch(deleteEvent(props.id))}>
        Delete
      </button>
      <Link to={`/edit/${props.id}`}>Edit</Link>
      <div className="event-keywords">
        {props.keywordsArray.map((kw, id) => {
          return <Keyword keyword={kw} key={id} />;
        })}
      </div>
    </div>
  );
};

export default EventItem;
