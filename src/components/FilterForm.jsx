import React from 'react';
import {setTextFilter, setStartYearFilter, setEndYearFilter} from '../store/actions/filters';
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
    <label htmlFor="startyearfilter">start year</label>
    <input
      type="text"
      placeholder={'YYYY'}
      value={filters.startYear}
      pattern="^\d{0,4}$"
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
      pattern="[0-9]{0,4}$"
      name="endyearfilter"
      onChange={(e) => {
         if (e.target.value.match(regexFilterDate)) {
           eventStore.dispatch(setEndYearFilter(+e.target.value))
         }
        console.log(filters)
      }}
    />
  </>
)
}

export default FilterForm;
