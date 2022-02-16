import React from 'react';
import { Link } from 'react-router-dom';
import AddDate from '../components/AddDate'
import DateList from '../components/DateList'
import Home from '../components/Home'

const Navigation = () => (
  <div>
    <Link to="/" element={<Home />}>Home</Link>
    <Link to="/list" element={<DateList />}>See list of dates</Link>
    <Link to="new" element={<AddDate/>}>Create new date</Link>
   
  </div>
)

export default Navigation;