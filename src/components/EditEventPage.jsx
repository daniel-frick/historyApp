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
                historyStore.dispatch(updateKeyword(kwToAdd.id, updates));
              } else {
                historyStore.dispatch(addKeyword(kw));
              }
            });
          }
          if (data.keywordsToDelete.length > 0) {
            data.keywordsToDelete.map(kwToDelete => {
              // finde im stateKW den richtigen Eintrag
              const index = stateKeywords.findIndex(
                oldEntry => oldEntry.keyword == kwToDelete
              );
              const foundKeyword = stateKeywords[index];
              // if count is 1, delete entry

              if (foundKeyword.count == 1) {
                historyStore.dispatch(deleteKeyword(foundKeyword));
                // if count is > 1, reduce count by 1
              } else {
                const newCount = foundKeyword.count - 1;
                const updates = {
                  ...foundKeyword,
                  count: newCount,
                };
                historyStore.dispatch(updateKeyword(foundKeyword.id, updates));
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
