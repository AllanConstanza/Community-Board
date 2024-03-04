import React from 'react';
import Card from './Card'; // Import Card component
import eventsData from '../data/resources'; // Import event data
import './CommunityBoard.css'; // Import CSS for CommunityBoard component

const CommunityBoard = () => {
  return (
    <div className="community-board">
      {eventsData.map((event, index) => (
        <Card key={index} event={event} />
      ))}
    </div>
  );
}

export default CommunityBoard;