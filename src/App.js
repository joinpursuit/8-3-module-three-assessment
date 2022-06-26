import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Movies from './Components/Movies'
import People from './Components/People'
import Locations from './Components/Locations'
import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Router>
          <NavBar/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/movies" element={<Movies/>}/>
           <Route path="/people" element={<People/>}/>
           <Route path="/locations" element={<Locations/>}/>
        </Routes>
      </Router>
    </div>
  );
  }
}


export default App;
