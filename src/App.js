import Nav from './Nav.js';
import Movies from './Movies.js';
import People from './People.js';
import Location from './Location.js';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main>
        <div className='App'>
          <Nav />
          <Routes>
            <Route
              path='/'
              element={<h1 className='welcome'>Welcome to GhibliApp!</h1>}
            />
            <Route path='/People' element={<People />} />
            <Route path='/Movies' element={<Movies />} />
            <Route path='/Location' element={<Location />} />
          </Routes>
        </div>
      </main>
    );
  }
}
export default App;
