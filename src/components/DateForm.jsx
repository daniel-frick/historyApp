import React, {useState} from 'react';

const DateForm = (props) => {
  const initialState = {
    title: 'What happened?',
    body: 'Add a short description',
    notes: 'Links and additional notes',
    startDate: 'YYYY/MM/DD',
    endDate:'YYYY/MM/DD',
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
      placeholder={title}
    />
    <label htmlFor="body">Body</label>
    <input
      onChange={onBodyChange}
      type="text"
      name="body"
      id="body"
      placeholder={body}
    />
    <label htmlFor="startdate">Start date</label>
    <input
      onChange={onStartDateChange}
      type="text"
      name="startdate"
      id="startdate"
      placeholder={startDate}
    />
    <label htmlFor="enddate">End date</label>
    <input
      onChange={onEndDateChange}
      type="text"
      name="enddate"
      id="enddate"
      placeholder={startDate}
    />
    <button type="submit">Submit</button>
  </form>
  
  </>
)}


export default DateForm