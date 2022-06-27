import React from "react";
import './Locations.css'

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      display: false,
    };
  }

  componentDidMount() {
    let baseURL = "https://ghibliapi.herokuapp.com/locations";
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => this.setState({ locations: data }));
  }

  //need name, climate, and terrain

  handleLocationToggle = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  sortedName = (data) => {
    let sortedNames = data.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
    });
    this.setState({ locations: sortedNames });
  };

  sortedClimate = (data) => {
    let sortedClimate = data.sort((a, b) => {
      if (a.climate.toLowerCase() > b.climate.toLowerCase()) return 1;
      if (a.climate.toLowerCase() < b.climate.toLowerCase()) return -1;
      return 0;
    });
    this.setState({ locations: sortedClimate });
  };

  sortedTerrain = (data) => {
    let sortedTerrain = data.sort((a, b) => {
      if (a.terrain.toLowerCase() > b.terrain.toLowerCase()) return 1;
      if (a.terrain.toLowerCase() < b.terrain.toLowerCase()) return -1;
      return 0;
    });
    this.setState({ locations: sortedTerrain });
  };

  render() {
    let { locations, display } = this.state;

    let viewLocations = locations.map((location, idx) => {
      return (
        <li key={idx} className="locationCard">
          <ul>
            <li>
              <span>
                <h4>Name:</h4> {location.name}
              </span>
            </li>
            <li>
              <span>
                <h4>Climate:</h4> {location.climate}
              </span>
            </li>
            <li>
              <span>
                <h4>Terrain:</h4> {location.terrain}
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
              <button onClick={this.handleLocationToggle}>
                Hide Locations
              </button>
              <button onClick={() => this.sortedTerrain(locations)}>
                Sort by Terrain
              </button>
              <button onClick={() => this.sortedName(locations)}>
                Sort by Name
              </button>
              <button onClick={() => this.sortedClimate(locations)}>
                Sort by Climate
              </button>
            </div>
          ) : (
            <button onClick={this.handleLocationToggle}>Show Locations</button>
          )}
        </section>
        <ul className="locationsList">
          {this.state.display ? viewLocations : null}
        </ul>
      </div>
    );
  }
}

export default Locations;
