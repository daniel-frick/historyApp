import { produceWithPatches } from 'immer';
import React, {useState, useEffect} from 'react';
// https://stackoverflow.com/questions/54069253/usestate-set-method-not-reflecting-change-immediately
// https://dev.to/jleewebdev/using-the-usestate-hook-and-working-with-forms-in-react-js-m6b
const DateForm = (props) => {
  const initialState = {
    title: '',
    body: '',
    notes: '',
    startDate: 'YYYY/MM/DD',
    endDate:0,
  }

  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const [startDate, setStartDate] = useState('YYYY/XX/DD')

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

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      title,
      body,
      startDate
    })
  }
  
  return (
  <>
  <h2>Date Form</h2>

  <form className="formfields" onSubmit={onSubmit}>
    <label htmlFor="title">Title</label>
    <input
      onChange={onTitleChange}
      type="text" name="title"
      id="title"
    />
    <label htmlFor="body">Body</label>
    <input
      onChange={onBodyChange}
      type="text"
      name="body"
      id="body"
    />
    <label htmlFor="startdate">Start date</label>
    <input
      onChange={onStartDateChange}
      type="text"
      name="startdate"
      id="startdate"
      placeholder={startDate}
    />
    <button type="submit">Submit</button>
  </form>
  
  </>
)}


export default DateForm