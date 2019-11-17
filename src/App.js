import React from 'react';
import TableView from './components/TableView';
import './App.css';

function App() {
  return (
    <div className="app container">
      <header>
        <h1>Bay Area Commute Patterns</h1>
        <h3>How and where do people commute in the Bay Area?</h3>
        <p> Commute patterns, more commonly referred to as county-to-county commute flows, reflect the number of individuals traveling within and between various counties for commuting purposes. DATA SOURCE: U.S. Census Transportation Planning Package 2010</p>
      </header>
      <TableView />
    </div>
  );
}

export default App;
