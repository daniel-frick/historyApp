import React from 'react';
import {
  setTextFilter,
  setStartYearFilter,
  setEndYearFilter,
  setJubilee,
  setVantageYear,
} from '../store/actions/filters';
import { historyStore } from '../store/store/configStore';
import { useSelector } from 'react-redux';

let regexFilterDate = /^\d{0,4}$/;

const FilterForm = () => {
  // const filters = useSelector(state => state.filters);
  const filters = historyStore.getState().filters;

  return (
    <>
      <h2>Home</h2>
      <div>
        <label htmlFor="textfilter">Search events</label>
        <input
          value={filters.text}
          name="textfilter"
          onChange={e => {
            historyStore.dispatch(setTextFilter(e.target.value));
          }}
        />
      </div>
      <div>
        <label htmlFor="startyearfilter">start year</label>
        <input
          type="text"
          placeholder={'YYYY'}
          value={filters.startYear}
          name="startyearfilter"
          onChange={e => {
            if (e.target.value.match(regexFilterDate)) {
              historyStore.dispatch(setStartYearFilter(+e.target.value));
            }
          }}
        />

        <label htmlFor="endyearfilter">end year</label>
        <input
          type="text"
          placeholder={'YYYY'}
          value={filters.endYear}
          name="endyearfilter"
          onChange={e => {
            if (e.target.value.match(regexFilterDate)) {
              historyStore.dispatch(setEndYearFilter(+e.target.value));
            }
          }}
        />
      </div>
      <div>
        <label htmlFor="jubilee">Get all events that happened</label>
        <select
          value={filters.jubilee}
          name="jubilee"
          id="jubilee"
          onChange={e => {
            historyStore.dispatch(setJubilee(+e.target.value));
          }}
        >
          <option value="">Choose a period</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
        </select>
        &nbsp;years ago from the year
        <input
          type="number"
          value={filters.vantageYear}
          onChange={e => {
            historyStore.dispatch(setVantageYear(+e.target.value));
          }}
        />
      </div>
    </>
  );
};

export default FilterForm;
