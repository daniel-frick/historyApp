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
  console.log(stateKeywords);
  return (
    <>
      <h3>Add an event</h3>
      <EventForm
        onSubmit={data => {
          historyStore.dispatch(addEvent(data));

          if (data.keywordsArray.length > 0) {
            data.keywordsArray.map(kw => {
              const index = stateKeywords.findIndex(
                oldEntry => oldEntry.keyword == kw
              );

              console.log(stateKeywords);

              console.log(index);

              if (index > -1) {
                console.log('keyword found: ' + kw);
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
                console.log('adding new kw: ' + kw);
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
