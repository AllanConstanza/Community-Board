import React from 'react';
import './App.css'; // Import CSS for App component
import CommunityBoard from './components/CommunityBoard'; // Import CommunityBoard component

const App = () => {
  return (
    <div className="app">
      <h1>Fun Things to Do in San Francisco</h1>
      <CommunityBoard />
    </div>
  );
}

export default App;
