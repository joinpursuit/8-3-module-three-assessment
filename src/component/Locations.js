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

  // data= this.state.locations
  // sortName = (data) => {
  //   let sortedNames = new Set(data.map((element) => element.terrain));
  //   this.setState({
  //     locations: sortedNames,
  //   });
  // };

  sortName = (data) => {
    let sortedArr = data.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
    });
    this.setState({ locations: sortedArr });
  };

  sortClimate = (data) => {
    let sortedArr = data.sort((a, b) => {
      if (a.climate.toLowerCase() > b.climate.toLowerCase()) return 1;
      if (a.climate.toLowerCase() < b.climate.toLowerCase()) return -1;
      return 0;
    });
    this.setState({ locations: sortedArr });
  };

  sortTerrain = (data) => {
    let sortedArr = data.sort((a, b) => {
      if (a.terrain.toLowerCase() > b.terrain.toLowerCase()) return 1;
      if (a.terrain.toLowerCase() < b.terrain.toLowerCase()) return -1;
      return 0;
    });
    this.setState({ locations: sortedArr });
  };

  render() {
    let { locations, display } = this.state;

    let showLocations = locations.map((location, idx) => {
      return (
        <li key={idx} className="locationCard">
          <ul>
            <li>
              <span>
                <strong>Name:</strong> {location.name}
              </span>
            </li>
            <li>
              <span>
                <strong>Climate:</strong> {location.climate}
              </span>
            </li>
            <li>
              <span>
                <strong>Terrain:</strong> {location.terrain}
              </span>
            </li>
          </ul>
        </li>
      );
    });

    return (
      <div className="locations">
        <section className="location-header">
          <h1>List of Locations</h1>
          {display ? (
            <div>
              <button onClick={this.showLocationHandler}>Hide Locations</button>
              <button onClick={() => this.sortName(locations)}>Sort by Name</button>
              <button onClick={() => this.sortClimate(locations)}>Sort by Climate</button>
              <button onClick={() => this.sortTerrain(locations)}>Sort by Terrain</button>
            </div>
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
