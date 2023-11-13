import React from 'react';
import { editEvent } from '../store/actions/events';
import {
  addKeyword,
  deleteKeyword,
  updateKeyword,
} from '../store/actions/keywords';
import EventForm from './EventForm';
import { historyStore } from '../store/store/configStore';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { compareWithGeneralKeywordState } from '../utils/handleKeywords';

const EditEventPage = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const events = useSelector(state => state.events);
  const stateKeywords = useSelector(state => state.keywords);
  const eventObject = events.find(event => event.id === id);

  console.log(stateKeywords);

  return (
    <>
      <h3>Edit event</h3>
      <EventForm
        eventObject={eventObject}
        onSubmit={data => {
          historyStore.dispatch(editEvent(id, data));

          if (data.keywordsToAdd.length > 0) {
            const keywordsToAdd = data.keywordsToAdd;
            keywordsToAdd.map(kw => {
              const kwToAdd = compareWithGeneralKeywordState(kw, stateKeywords);
              if (kwToAdd) {
                let newCount = kwToAdd.count + 1;
                const updates = {
                  ...kwToAdd,
                  count: newCount,
                };
                console.log(updates);
                console.log(kwToAdd.id);
                historyStore.dispatch(updateKeyword(kwToAdd.id, updates));
              } else {
                console.log('new kw found');
                // historyStore.dispatch(addKeyword(kw));
              }
            });
          }
          navigate('/list');
        }}
      />
    </>
  );
};

export default EditEventPage;
