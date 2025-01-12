import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <div className="grid-container">
          <div className="grid-item tall-rectangle"></div>
          <div className="grid-item large-rectangle"></div>
          <div className="grid-item small-rectangle top-right"></div>
          <div className="grid-item small-square"></div>
          <div className="grid-item wide-rectangle"></div>
          <div className="grid-item small-rectangle middle-right"></div>
          <div className="grid-item circle"></div>
        </div>
      </main>
    </div>
  );
}

export default App;

