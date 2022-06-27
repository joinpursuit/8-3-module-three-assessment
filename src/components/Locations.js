import React from 'react';
import axios from 'axios';
import './Locations.css';

const LOCATION_URL = 'https://ghibliapi.herokuapp.com/locations';

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      displayLocations: false,
    };
  }

  componentDidMount = () => {
    axios.get(LOCATION_URL).then((results) => {
      this.setState({
        locations: results.data,
      });
    });
  };

  handleShowLocations = () => {
    this.setState({
      displayLocations: !this.state.displayLocations,
    });
  };

  sortByName = (data) => {
    let sortedByNameArr = data.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({ locations: sortedByNameArr });
  };

  sortByClimate = (data) => {
    let sortedByClimateArr = data.sort((a, b) => {
      if (a.climate.toLowerCase() > b.climate.toLowerCase()) {
        return 1;
      } else if (a.climate.toLowerCase() < b.climate.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({ locations: sortedByClimateArr });
  };

  sortByTerrain = (data) => {
    let sortedByTerrainArr = data.sort((a, b) => {
      if (a.terrain.toLowerCase() > b.terrain.toLowerCase()) {
        return 1;
      } else if (a.terrain.toLowerCase() < b.terrain.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({ locations: sortedByTerrainArr });
  };

  render() {
    let { locations, displayLocations } = this.state;

    let showLocations = locations.map((location, index) => {
      return (
        <li key={index} className='locations__cards'>
          <ul>
            <br />
            <li>
              <h6>Name: </h6>
              <span>{location.name}</span>
            </li>
            <br />
            <li>
              <h6>Climate: </h6>
              <span>{location.climate}</span>
            </li>
            <br />
            <li>
              <h6>Terrain: </h6>
              <span>{location.terrain}</span>
            </li>
            <br />
          </ul>
        </li>
      );
    });

    return (
      <div className='locations'>
        <section>
          <h1 className='locations__header'>List Of Locations</h1>
          {displayLocations ? (
            <div className='locations__button'>
              <button onClick={this.handleShowLocations}>Hide Locations</button>
              <button onClick={() => this.sortByName(locations)}>
                Sort by Name
              </button>
              <button onClick={() => this.sortByClimate(locations)}>
                Sort by Climate
              </button>
              <button onClick={() => this.sortByTerrain(locations)}>
                Sort by Terrain
              </button>
            </div>
          ) : (
            <button
              className='locations__button-show'
              onClick={this.handleShowLocations}
            >
              Show Locations
            </button>
          )}
        </section>
        <ul className='locations__card'>
          {this.state.displayLocations ? showLocations : null}
        </ul>
      </div>
    );
  }
}

export default Locations;
