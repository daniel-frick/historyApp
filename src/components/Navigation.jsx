import React from 'react';
import { Link } from 'react-router-dom';
import AddEventPage from './AddEventPage';
import EventListPage from './EventListPage';

const Navigation = () => (
  // <div>
  //   <div className="main_navigation">
  //     <Link to="/" element={<EventListPage />}>
  //       Home
  //     </Link>
  //   </div>
  //   <div className="main_navigation">
  //     <Link to="/list" element={<EventListPage />}>
  //       See list of events
  //     </Link>
  //   </div>
  //   <div className="main_navigation">
  //     <Link to="new" element={<AddEventPage />}>
  //       Create new event
  //     </Link>
  //   </div>
  // </div>
  <div className="main_navigation">
    <Link to="/" element={<EventListPage />}>
      Home
    </Link>

    <Link to="/list" element={<EventListPage />}>
      See list of events
    </Link>

    <Link to="new" element={<AddEventPage />}>
      Create new event
    </Link>
  </div>
);

export default Navigation;
