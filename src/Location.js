import React from 'react';

import './Location.css';
let BASE_URL = 'https://ghibliapi.herokuapp.com';
let PATH = '/locations';
let EXTENSION = '?format=j1';
function errorHandler(error) {
  console.log(error);
  return error;
}

class Location extends React.Component {
  constructor() {
    super();
    this.state = {
      ghibliDataLocations: [],
      showMore: false,
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}${PATH}${EXTENSION}`)
      .then((response) => response.json())
      .then((ghibliDataLocations) => this.setState({ ghibliDataLocations }))
      .catch(errorHandler);
  }

  toggleShowLocation = () => {
    this.setState((state) => ({ showMore: !state.showMore }));
  };

  render() {
    const locationCards = this.state.ghibliDataLocations.map((location) => (
      <li id='LocationCard' key={location.id}>
        <ul id='LocationCardContents'>
          <li id='name'>
            <strong>Name:</strong> <span id='nameVal'>{location.name}</span>
          </li>
          <li id='climate'>
            <strong>Climate:</strong>{' '}
            <span id='climateVal'>{location.climate}</span>
          </li>
          <li id='terrain'>
            <strong>Terrain:</strong>{' '}
            <span id='terrainVal'>{location.terrain}</span>
          </li>
        </ul>
      </li>
    ));

    return (
      <div className='locations'>
        <h1>List of Locations</h1>
        <section id='buttonHolder'>
          <button id='ShowLocationBtn' onClick={this.toggleShowLocation}>
            {this.state.showMore ? 'Hide Locations' : 'Show Locations'}
          </button>
          <button>Sort By Name Placeholder</button>
          <button>Sort By Climate Placeholder</button>
          <button>Sort By Terrain Placeholder</button>
        </section>
        {this.state.showMore && (
          <article>
            <ul id='LocationList'>{locationCards}</ul>
          </article>
        )}
      </div>
    );
  }
}
export default Location;
