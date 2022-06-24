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
    // this.sortName(this.state.locations)
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
              <button onClick={this.sortName}>Sort by Name</button>
              <button>Sort by Climate</button>
              <button>Sort by Terrain</button>
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
