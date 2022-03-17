import React from 'react';
import {
  setTextFilter,
  setStartYearFilter,
  setEndYearFilter,
  setJubilee,
  setVantageYear
} from '../store/actions/filters';
import {eventStore} from '../store/store/configStore';
import {useSelector} from 'react-redux';

let regexFilterDate = /^\d{0,4}$/;

const FilterForm = () => {

  const filters = useSelector(state => state.filters)

  return (
  <>
    <h2>Home</h2>
    <div>
      <label htmlFor="textfilter">Search events</label>
      <input
        value={filters.text}
        name="textfilter"
        onChange={(e) => {
          eventStore.dispatch(setTextFilter(e.target.value))
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
        onChange={(e) => {
          if (e.target.value.match(regexFilterDate)) {
          eventStore.dispatch(setStartYearFilter(+e.target.value))
          }
        }}
      />

      <label htmlFor="endyearfilter">end year</label>
      <input
        type="text"
        placeholder={'YYYY'}
        value={filters.endYear}
        name="endyearfilter"
        onChange={(e) => {
          if (e.target.value.match(regexFilterDate)) {
            eventStore.dispatch(setEndYearFilter(+e.target.value))
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
        onChange={(e) => {
          eventStore.dispatch(setJubilee(+e.target.value))
        }}
      >
        <option value=''>Any year</option>
        <option value="10">10 years ago</option>
        <option value="25">25 years ago</option>
      </select>
      &nbsp;from the year
      <input
        type="number"
        value={filters.vantageYear}
         onChange={(e) => {
          eventStore.dispatch(setVantageYear(+e.target.value))
        }}
        
      />
      </div>
  </>
)
}

export default FilterForm;
