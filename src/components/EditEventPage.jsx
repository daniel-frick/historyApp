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
import { keywordInState } from '../utils/handleKeywords';

const EditEventPage = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const events = useSelector(state => state.events);
  const stateKeywords = useSelector(state => state.keywords);
  console.log(stateKeywords);
  const eventObject = events.find(eventObject => eventObject.id === id);

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
              const kwInState = keywordInState(keywordsToAdd, stateKeywords);
              if (kwInState) {
                historyStore.dispatch(updateKeyword(kw));
              } else {
                historyStore.dispatch(addKeyword(kw));
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
