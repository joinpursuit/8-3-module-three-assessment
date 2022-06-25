import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Movies from './components/Movies';
import People from './components/People';
import Locations from './components/Locations';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/People" element={<People />} />
        <Route path="/Locations" element={<Locations />} />
      </Routes>
    </div>
  );
}


export default App;
