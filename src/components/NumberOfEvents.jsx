import React, { useState } from 'react';

const NumberOfEvents = ({ defaultValue = 32 }) => {
  const [eventCount, setEventCount] = useState(defaultValue);

  const handleInputChange = (event) => {
    setEventCount(event.target.value);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="event-number-input">Number of Events:</label>
      <input
        id="event-number-input"
        type="number"
        role="textbox" // Necesario para los tests
        value={eventCount}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default NumberOfEvents;
