import React from 'react';
import { addDate } from '../store/actions/dates';
import DateForm from './DateForm'
import { dateStore } from '../store/store/configStore';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const EditDate = () => {
  // 857819f9-b367-4741-a6fa-13122f9a377f
  const {id} = useParams()
  const dateObject= useSelector(state => state).find(dateObject => dateObject.id === id)

  return (
  <>
  <h3>Edit date</h3>
  <p>editing date object with the id of {id}</p>
  <p>{dateObject.title}</p>
  <DateForm
    dateObject={dateObject}
    onSubmit={console.log('form from edit page')} />
  </>
)}

export default EditDate