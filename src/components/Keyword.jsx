import React, { useEffect } from 'react';
import EventItem from './EventItem';
import { useSelector } from 'react-redux';
import selectEvents from '../store/selectors/visibleEvents';
import { historyStore } from '../store/store/configStore';
import { fetchEvents } from '../store/actions/events';

const Keyword = props => {
  return (
    <>
      <div className="keyword-array-element">{props.keyword}</div>
    </>
  );
};

export default Keyword;
