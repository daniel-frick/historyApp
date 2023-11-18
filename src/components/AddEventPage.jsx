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
              if (!stateKeywords.includes(kw)) {
                historyStore.dispatch(addKeyword(kw));
              } else {
                const kwAlreadyThere = compareWithGeneralKeywordState(
                  kw,
                  stateKeywords
                );

                console.log(kwAlreadyThere);

                let newCount = kwAlreadyThere.count + 1;
                const updates = {
                  ...kwAlreadyThere,
                  count: newCount,
                };

                historyStore.dispatch(
                  updateKeyword(kwAlreadyThere.id, updates)
                );
              }
            });
          }

          navigate('/list');
        }}
      />
    </>
  );
};

export default AddEventPage;
