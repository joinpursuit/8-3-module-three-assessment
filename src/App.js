import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
      </header>

    </div>
  );
}


export default App;
