// src/components/Event.jsx
import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false); // Estado para mostrar/ocultar detalles

  return (
    <div className="event">
      <h1>{event.summary}</h1>
      <p>{event.created}</p>
      <p>{event.location}</p>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'hide details' : 'show details'}
      </button>

      {showDetails && (
        <div className="event-details">
          <p>{event.description}</p>
        </div>
      )}
    </div>
  );
};

export default Event;
