import React from 'React';
import Keyword from './Keyword';
import { deleteEvent } from '../store/actions/events';
import { deleteKeyword, updateKeyword } from '../store/actions/keywords';
import { historyStore } from '../store/store/configStore';
import { Link } from 'react-router-dom';
import { getFullDateString } from '../utils/displayfunctions';
import { useSelector } from 'react-redux';

const EventItem = props => {
  const stateKeywords = useSelector(state => state.keywords);
  return (
    <div className="event-item">
      <p className="event">
        <b>
          {getFullDateString(props)}: {props.title}.
        </b>{' '}
        {props.body}
      </p>
      <button
        onClick={() => {
          historyStore.dispatch(deleteEvent(props.id));
          if (props.keywordsArray.length > 0) {
            console.log(stateKeywords);
            props.keywordsArray.map(kw => {
              const index = stateKeywords.findIndex(
                oldEntry => oldEntry.keyword == kw
              );
              const stateKW = stateKeywords[index];

              if (stateKW.count == 1) {
                console.log('deleting kw: ' + stateKW.keyword);
                historyStore.dispatch(deleteKeyword(stateKW.id));
              } else {
                console.log('kw count -1: ' + stateKW.keyword);
                const newCount = stateKW.count - 1;
                const updates = {
                  ...stateKW,
                  count: newCount,
                };
                historyStore.dispatch(updateKeyword(stateKW.id, updates));
              }
            });
          }
        }}
      >
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
