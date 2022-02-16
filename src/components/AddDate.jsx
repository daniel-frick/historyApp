import React from 'react';
import { addDate } from '../store/actions/dates';
import DateForm from './DateForm'
import { dateStore } from '../store/store/configStore';

const AddDate = () => (
  <>
  <h3>Add a date</h3>
  <DateForm onSubmit={(data) => dateStore.dispatch(addDate(data))} />
  </>
)

export default AddDate