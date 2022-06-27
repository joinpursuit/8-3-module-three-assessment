import { render } from '@testing-library/react';
import React, { Component } from 'react';

let BASE_URL = 'https://ghibliapi.herokuapp.com';
let PATH = '/films';
let API_FORMAT = '?format=j1';

const handleSelection = (event) => {
  console.log(event);
};

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      ghibData: [],
      titles: [],
    };
  }

  componentWillMount() {
    let grabbedData = [];
    fetch(`${BASE_URL}${PATH}${API_FORMAT}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        grabbedData = data.results.map((title) => {
          return title;
        });
        this.setState({
          titles: grabbedData,
        });
      });
  }

  render() {
    return (
      <div>
        <h1> Select A Movie </h1>
        <label for='movies'></label>
        <select id='movies'>{}</select>
        <option>{}</option>
      </div>
    );
  }
}
export default Movies;
