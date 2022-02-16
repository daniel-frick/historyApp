import React from 'React';
import { connect } from 'react-redux';
import { deleteDate } from '../store/actions/dates';

const DateItem = (props) => (
  <div className="date-item">
    <p>{props.title}</p>
    <p>{props.body}</p>
    <p>{props.startDate}</p>
    <button onClick={() => props.dispatch(deleteDate(props.id))}>Delete</button>
  </div>
)

export default connect()(DateItem);