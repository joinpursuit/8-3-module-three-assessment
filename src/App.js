import Nav from './Nav.js';
import Movies from './Movies.js';
import People from './People.js';
import Location from './Location.js';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';

/* Destructured Fetches that I do for Movies, People, and Location portions keep returning undefined. Troubleshooted the problem online
    And looked at past works but still couldn't find a fix with the time I had to work on this. 
    At the very least other than the complications with Movie's dropbox I've coded at least the outline of the logic for People and Locations. */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchedEntry: [],
    };
  }
  fetchHandler = (searchInput) => {
    let persons = [];
    fetch(`https://ghibliapi.herokuapp.com/${searchInput}?format=j1`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const people = data.items;
        persons = people.map((person) => {
          return {
            age: person.age,
            eyes: person.eye_color,
            hair: person.hair_color,
          };
        });
        this.setState({ searchedEntry: persons });
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
            <Route
              path='/People'
              element={
                <>
                  <People fetchHandler={this.fetchHandler} />
                </>
              }
            />
            <Route path='/Movies' element={<Movies />} />
            <Route path='/Location' element={<Location />} />
          </Routes>
        </div>
      </main>
    );
  }
}
export default App;
