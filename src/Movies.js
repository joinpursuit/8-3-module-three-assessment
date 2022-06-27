import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './Movies.css';

let BASE_URL = 'https://ghibliapi.herokuapp.com';
let PATH = '/films';
let API_FORMAT = '?format=j1';

fetch(`${BASE_URL}${PATH}${API_FORMAT}`)
  .then((response) => response.json())
  .then(generateDropDown)
  .catch(errorHandler);

function errorHandler(error) {
  console.log(error);
  return error;
}

function generateDropDown(json) {
  return json.map((entry) => {
    return (
      <select name='movies'>
        <option value=' '>" "</option>
        <option value={entry.title}>${entry.title}</option>
      </select>
    );
  });

  /*json.forEach((movie) => {
    for (let key in movie) {
      let ghibliTitles = document.createElement('option');
      ghibliTitles.textContent = key;
      ghibliTitles.value = movie[key];
      console.log(ghibliTitles);
      if (movie.title === key) {
        let dropdown = document.querySelector(`#Selection`);
        dropdown.append(ghibliTitles);
      }
      console.log(`${key}: ${movie[key]}`);
    }
  }); */
}
class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className='MovieDiv'>
        <h1>Select A Movie</h1>
        <select name='Movies' id='Movies'>
          <option value=' '>" " </option>
          <option value='Placeholder'>Placeholder</option>
        </select>
      </div>
    );
  }
}
export default Movies;
