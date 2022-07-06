import React from 'react';
import './App.css';
import NavBar from './Components/NavBar.js';
import Home from './Components/Home.js';
import Movies from './Components/Movies.js';
import FilmDetails from './Components/FilmDetails.js';
import People from './Components/People.js';
import Vehicles from './Components/Vehicles.js';
import Species from './Components/Species.js';
import Locations from './Components/Locations.js';
import Page404 from './Components/Page404.js';
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <title> Welcome to GhibliApp</title>

        {/* <header className='App-header'> */}
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/FilmDetails/:id' element={<FilmDetails />} />

          <Route path='/people' element={<People />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/species' element={<Species />} />
          <Route path='/vehicles' element={<Vehicles />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        {/* </header> */}
      </div>
    );
  }
}

export default App;
