import React from 'react';
import { editDate } from '../store/actions/dates';
import DateForm from './DateForm'
import { dateStore } from '../store/store/configStore';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const EditDate = () => {
  const {id} = useParams()
  const dateObject= useSelector(state => state).find(dateObject => dateObject.id === id)

  return (
  <>
  <h3>Edit date</h3>
  <p>editing date object with the id of {id}</p>
  <p>{dateObject.title}</p>
  <DateForm
    dateObject={dateObject}
    onSubmit={(data) => dateStore.dispatch(editDate(id, data))} />
  </>
)}

export default EditDate