import React from 'react';
import {setTextFilter, setStartYearFilter, setEndYearFilter} from '../store/actions/filters';
import {eventStore} from '../store/store/configStore';
import {useSelector} from 'react-redux';

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
      type="number"
      value={filters.startYearFilter}
      name="startyearfilter"
      onChange={(e) => {
        eventStore.dispatch(setStartYearFilter(+e.target.value))
        console.log(filters)
      }}
    />

    <label htmlFor="endyearfilter">end year</label>
    <input
      type="number"
      value={filters.endYearFilter}
      name="endyearfilter"
      onChange={(e) => {
        eventStore.dispatch(setEndYearFilter(+e.target.value))
        console.log(filters)
      }}
    />
  </>
)
}

export default FilterForm;
