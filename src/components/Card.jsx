import React from 'react';
import './Card.css'; // Import CSS for Card component

const Card = ({ event }) => {
  return (
    <div className="card">
      <img src={event.image} alt={event.title} />
      <div className="card-content">
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <button className="btn">More Info</button>
      </div>
    </div>
  );
}

export default Card;