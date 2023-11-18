import React, { useState, useEffect } from 'react';
import Keyword from './Keyword';
import { DateTime } from 'luxon';
import {
  getSingleStartDate,
  getSingleEndDate,
} from '../utils/displayfunctions';

import { compareKeywords } from '../utils/handleKeywords';

const dateFormat = 'YYYY/MM/DD';
let regexDateFormat = /^\d{1,4}(?=($|(\/\d{2}$)|((\/\d{2}){2}$)))/;

//

const EventForm = props => {
  const initialState = {
    title: props.eventObject ? props.eventObject.title : '',
    body: props.eventObject ? props.eventObject.body : '',
    keywords: props.eventObject
      ? props.eventObject.keywordsArray.toString().replaceAll(',', ', ')
      : '',
    startDate: props.eventObject ? getSingleStartDate(props.eventObject) : '',
    endDate: props.eventObject ? getSingleEndDate(props.eventObject) : '',
  };

  const initialKW = initialState.keywords.split(',').map(kw => kw.trim());

  const [title, setTitle] = useState(initialState.title);
  const [body, setBody] = useState(initialState.body);
  const [keywords, setKeywords] = useState(initialState.keywords);
  const [startDate, setStartDate] = useState(initialState.startDate);
  const [endDate, setEndDate] = useState(initialState.endDate);
  const [validStartDate, setValidStartDate] = useState(false);
  const [validEndDate, setValidEndDate] = useState(true);
  const [error, setError] = useState('');

  const verifyStartDate = input => {
    if (input.match(regexDateFormat)) {
      setValidStartDate(true);
    } else {
      setValidStartDate(false);
    }
  };
  const verifyEndDate = input => {
    if (input === '' || input.match(regexDateFormat)) {
      setValidEndDate(true);
    } else {
      setValidEndDate(false);
    }
  };

  const onTitleChange = e => {
    const title = e.target.value;
    setTitle(title);
    return title;
  };

  const onBodyChange = e => {
    const body = e.target.value;
    setBody(body);
  };

  const onKeywordsChange = e => {
    const keywords = e.target.value;
    setKeywords(keywords);
  };

  const onStartDateChange = e => {
    const startDate = e.target.value;
    verifyStartDate(startDate);
    setStartDate(startDate);
  };

  const onEndDateChange = e => {
    const endDate = e.target.value;
    verifyEndDate(endDate);
    setEndDate(endDate);
  };

  useEffect(() => {
    verifyStartDate(initialState.startDate);
  }, []);

  const prepareDataForSubmit = e => {
    e.preventDefault();
    const keywordsArray = keywords.split(',').map(d => d.trim());
    const startDateArray = startDate.split('/').map(d => +d);
    const endDateArray = endDate
      ? endDate.split('/').map(d => +d)
      : startDateArray;
    const withStartDay = startDateArray.length === 3;
    const withStartMonth = startDateArray.length >= 2;
    const withEndDay = endDateArray.length === 3;
    const withEndMonth = endDateArray.length >= 2;
    const generatedStartDate = DateTime.local(...startDateArray);
    const generatedEndDate = DateTime.local(...endDateArray);

    const keywordsToAdd = compareKeywords(initialKW, keywordsArray).toAdd;
    const keywordsToDelete = compareKeywords(initialKW, keywordsArray).toDelete;

    if (!generatedStartDate.isValid || !generatedEndDate.isValid) {
      setError('you have entered an invalid date format, please check again');
    } else if (
      generatedStartDate.startOf('day') > generatedEndDate.startOf('day')
    ) {
      setError(
        'The start date comes after the end date, please check your input.'
      );
    } else {
      props.onSubmit({
        title,
        body,
        keywordsArray,
        startDate,
        endDate,
        withStartDay,
        withStartMonth,
        withEndDay,
        withEndMonth,
        keywordsToAdd,
        keywordsToDelete,
      });
    }
  };

  return (
    <>
      <form className="formfields" onSubmit={prepareDataForSubmit}>
        <label htmlFor="title">Title</label>
        <input
          onChange={onTitleChange}
          type="text"
          name="title"
          id="title"
          placeholder={'What happened?'}
          value={title}
        />
        <label htmlFor="body">Body</label>
        <input
          onChange={onBodyChange}
          type="text"
          name="body"
          id="body"
          placeholder={'Add a short description'}
          value={body}
        />
        {initialKW.map((kw, id) => (
          <Keyword keyword={kw} key={id} />
        ))}
        <label htmlFor="keywords">Keywords</label>
        <input
          onChange={onKeywordsChange}
          type="text"
          name="keywords"
          id="keywords"
          placeholder={'Add keywords divided by "," to categorize your event'}
          value={keywords}
        />
        <label htmlFor="startdate">Start date</label>
        <input
          className={validStartDate ? 'date-input' : 'date-input error'}
          onChange={onStartDateChange}
          type="text"
          name="startdate"
          id="startdate"
          placeholder={dateFormat}
          value={startDate}
        />
        <label htmlFor="enddate">End date</label>
        <input
          className={validEndDate ? 'date-input' : 'error'}
          onChange={onEndDateChange}
          type="text"
          name="enddate"
          id="enddate"
          placeholder={dateFormat}
          value={endDate}
        />
        <button
          disabled={!title || !validEndDate || !validStartDate}
          type="submit"
        >
          Submit
        </button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default EventForm;
