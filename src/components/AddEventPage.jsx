import React from 'react';
import { addEvent } from '../store/actions/events';
import { addKeyword, updateKeyword } from '../store/actions/keywords';
import EventForm from './EventForm';
import { historyStore } from '../store/store/configStore';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AddEventPage = () => {
  let navigate = useNavigate();
  const stateKeywords = useSelector(state => state.keywords);

  return (
    <>
      <h3>Add an event</h3>
      <EventForm
        onSubmit={data => {
          historyStore.dispatch(addEvent(data));

          if (data.keywordsArray.length > 0) {
            console.log(stateKeywords);
            data.keywordsArray.map(kw => {
              const index = stateKeywords.findIndex(
                oldEntry => oldEntry.keyword == kw
              );

              if (index > -1) {
                let kwAlreadyThere = stateKeywords[index];
                let newCount = kwAlreadyThere.count + 1;
                const updates = {
                  ...kwAlreadyThere,
                  count: newCount,
                };

                historyStore.dispatch(
                  updateKeyword(kwAlreadyThere.id, updates)
                );
              } else {
                historyStore.dispatch(addKeyword(kw));
              }
            });
            navigate('/list');
          }
        }}
      />
    </>
  );
};

export default AddEventPage;
