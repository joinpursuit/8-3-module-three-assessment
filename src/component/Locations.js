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
      })
      .catch((error) => console.log(error));
  };

  /**
   * fetches data when the page loads. location  state is already populated.
   */
  componentDidMount = () => {
    this.getLocations();
  };

  showLocationHandler = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  /**
   * Sorts the location alphabetically by type chosen
   * @param {object []} data - array of location objects pulled from API
   * @param {string} type - either "name", "climate", "terrain"
   */
  sortName = (data, type) => {
    let sortedArr = data.sort((a, b) => {
      if (a[type].toLowerCase() > b[type].toLowerCase()) return 1;
      if (a[type].toLowerCase() < b[type].toLowerCase()) return -1;
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
              <button onClick={() => this.sortName(locations, 'name')}>
                Sort by Name
              </button>
              <button onClick={() => this.sortName(locations, 'climate')}>
                Sort by Climate
              </button>
              <button onClick={() => this.sortName(locations, 'terrain')}>
                Sort by Terrain
              </button>
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
