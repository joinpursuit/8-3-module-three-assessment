import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Movies from './components/Movies';
import People from './components/People';
import Locations from './components/Locations';

import './styles/App.css';

function App() {
  return (
    <div className="App container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/people" element={<People />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/*" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;