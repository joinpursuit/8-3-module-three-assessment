import Nav from './Nav.js';
import Movies from './Movies.js';
import SearchBar from './SearchBar.js';
import Location from './Location.js';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';

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
      <div className='App'>
        <Nav />
        <Routes>
          <Route
            path='/SearchBar'
            element={
              <>
                <SearchBar fetchHandler={this.fetchHandler} />
              </>
            }
          />
          <Route path='/Movies' element={<Movies />} />
          <Route path='/Location' element={<Location />} />
        </Routes>
      </div>
    );
  }
}
export default App;
