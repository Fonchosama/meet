// src/App.jsx
import React from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';

const App = () => {
  return (
    <div>
      <CitySearch id="city-search" />
      <NumberOfEvents id="number-of-events" />
      <EventList id="event-list" />
    </div>
  );
};

export default App;
