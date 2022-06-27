import React from 'react';
import NavBar from './Components/NavBar.js';
import Home from './Components/Home.js';
import Movies from './Components/Movies.js';
// import Human from './Components/Human.js';
import People from './Components/People.js';
import Locations from './Components/Locations.js';
import Page404 from './Components/Page404.js';
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <title> Welcome to GhibliApp</title>

        <header className='App-header'>
          <NavBar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            {/* <Route path='people' element={<Human />} /> */}
            <Route path='people' element={<People />} />
            <Route path='/locations' element={<Locations />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </header>
      </div>
    );
  }
}

export default App;
