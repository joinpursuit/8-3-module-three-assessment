import React, { Component } from "react";

export default class Locations extends Component {
  constructor() {
    super();
    this.state = {
      button: true,
      listOfLocations: [],
    };
  }

  fetchMovies = () => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          listOfLocations: result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  handleClick = () => {
    this.setState({
      button: !this.state.button,
    });
  };

  render() {
    let listItemId = 0;
    let { listOfLocations, button } = this.state;

    let location = listOfLocations.map((location) => {
      if (!button) {
        return (
          <li key={listItemId++}>
            <ul key={location.id}>
              <li key={location.id}>
                <p>
                  <strong>Location: </strong>
                  {location.name}
                </p>
                <p>
                  <strong>Climate: </strong> {location.climate}
                </p>
                <p>
                  <strong>Terrain: </strong>: {location.terrain}
                </p>
              </li>
            </ul>
          </li>
        );
      }
      return <div key={listItemId++}></div>;
    });
    return (
      <div className="locations">
        <h3>List of Locations</h3>
        <button onClick={this.handleClick}>
          {this.state.button ? "Show Locations" : "Hide Locations"}
        </button>
        <ul key={location.id}>{location}</ul>
      </div>
    );
  }
}
