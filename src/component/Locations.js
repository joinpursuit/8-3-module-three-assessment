import React from 'react';
import './locations.css';

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      display: false,
    };
  }

  getLocations = () => {
    fetch('https://ghibliapi.herokuapp.com/locations')
      .then((result) => result.json())
      .then((data) => {
        this.setState({
          locations: data,
        });
      });
  };

  componentDidMount = () => {
    this.getLocations();
  };

  showLocationHandler = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    let { locations } = this.state;

    let showLocations = locations.map((location, idx) => {
      return (
        <li key={idx} className="locationCard">
          <ul>
            <li>Name: {location.name}</li>
            <li>Climate: {location.climate}</li>
            <li>Terrain: {location.terrain}</li>
          </ul>
        </li>
      );
    });

    let { display } = this.state;
    return (
      <div className="locations">
        <section className="location-header">
          <h1>List of Locations</h1>
          {display ? (
            <button onClick={this.showLocationHandler}>Hide Locations</button>
          ) : (
            <button onClick={this.showLocationHandler}>Show Locations</button>
          )}
        </section>
        <ul className="locationsList">
          {this.state.display ? showLocations : null}
        </ul>
      </div>
    );
  }
}

export default Locations;
