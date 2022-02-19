import React, {useState} from 'react';
import { DateTime } from 'luxon';
import {getSingleStartDate, getSingleEndDate} from '../utils/displayfunctions';
const dateFormat = 'YYYY/MM/DD'

const EventForm = (props) => {
  const initialState = {
    title: props.eventObject ? props.eventObject.title : '',
    body: props.eventObject ? props.eventObject.body : '',
    notes: 'Links and additional notes',
    startDate: props.eventObject ? getSingleStartDate(props.eventObject) : '',
    endDate: props.eventObject ? getSingleEndDate(props.eventObject) : '',
  }

  const [title, setTitle] = useState(initialState.title)
  const [body, setBody] = useState(initialState.body)
  const [startDate, setStartDate] = useState(initialState.startDate)
  const [endDate, setEndDate] = useState(initialState.endDate)

  const onTitleChange = (e) => {
    const title = e.target.value
    setTitle(title)
  }

  const onBodyChange = (e) => {
    const body = e.target.value
    setBody(body)
  }

  const onStartDateChange = (e) => {
    const startDate = e.target.value
    setStartDate(startDate)
  }

   const onEndDateChange = (e) => {
    const endDate = e.target.value
    setEndDate(endDate)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const startDateArray = startDate.split('/').map(e => +e)
    const endDateArray = endDate !== dateFormat ? endDate.split('/').map(e => +e) : startDateArray
    const withStartDay = startDateArray.length === 3;
    const withStartMonth = startDateArray.length >= 2;
    const withEndDay = endDateArray.length === 3;
    const withEndMonth = endDateArray.length >= 2;
    props.onSubmit({
      title,
      body,
      startDate: DateTime.local(...startDateArray),
      endDate: DateTime.local(...endDateArray),
      withStartDay,
      withStartMonth,
      withEndDay,
      withEndMonth
      })
  }
  
  return (
  <>
  <form className="formfields" onSubmit={onSubmit}>
    <label htmlFor="title">Title</label>
    <input
      onChange={onTitleChange}
      type="text" name="title"
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
    <label htmlFor="startdate">Start date</label>
    <input
      onChange={onStartDateChange}
      type="text"
      name="startdate"
      id="startdate"
      placeholder={dateFormat}
      value={startDate}
    />
    <label htmlFor="enddate">End date</label>
    <input
      onChange={onEndDateChange}
      type="text"
      name="enddate"
      id="enddate"
      placeholder={dateFormat}
      value={endDate}
    />
    <button type="submit">Submit</button>
  </form>
  
  </>
)}


export default EventForm