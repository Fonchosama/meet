// src/components/NumberOfEvents.jsx
import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [eventCount, setEventCount] = useState(32); // Valor inicial por defecto

  const handleChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0) {
      // Solo números y valores positivos
      setEventCount(value); // Mantener el valor como string
      setCurrentNOE(parseInt(value, 10)); // Convertir el valor a número al pasar a setCurrentNOE
    }
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
