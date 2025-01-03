// src/components/NumberOfEvents.jsx
import React, { useState } from 'react';

const NumberOfEvents = () => {
  const [eventCount, setEventCount] = useState(32); // Valor inicial por defecto

  const handleChange = (e) => {
    setEventCount(e.target.value);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="event-count">Number of Events:</label>
      <input
        id="event-count"
        type="number"
        value={eventCount}
        onChange={handleChange}
      />
    </div>
  );
};

export default NumberOfEvents;
