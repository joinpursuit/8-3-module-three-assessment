import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Movie from './Movie';
import People from './People';
import Locations from './Locations';
import Home from './Home';

const App = () => {
  return (
    <div className="App">
      <header>
      <Nav/>
      </header>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movie" element={<Movie/>} />
      <Route path="/people" element={<People/>} />
      <Route path="/locations" element={<Locations/>} />
      </Routes>
    </div>
  );
}


export default App;
