import React, { Component } from "react";
import "../Components/Locations.css";

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

  addButtons = () => {
    return (
      <span>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button>Sort by Climate</button>
        <button>Sort by Terrain</button>
      </span>
    );
  };

  sortByName = () => {
    let arrayOfLocationNames = [];
    this.state.listOfLocations.map((location) => {
      arrayOfLocationNames.push(location.name);
      arrayOfLocationNames.sort().map((location) => {
        return <li>{location}</li>;
      });
    });
  };

  render() {
    let listItemId = 0;
    let { listOfLocations, button } = this.state;

    let location = listOfLocations.map((location) => {
      if (!button) {
        return (
          <li key={listItemId++} className="locations">
            <section>
              <ul key={location.id}>
                <li key={location.id}>
                  <p>
                    <strong>Name: </strong>
                    {location.name}
                  </p>
                  <p>
                    <strong>Climate: </strong> {location.climate}
                  </p>
                  <p>
                    <strong>Terrain: </strong> {location.terrain}
                  </p>
                </li>
              </ul>
            </section>
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
        {this.state.button ? "" : <>{this.addButtons()}</>}
        <ul key={location.id} className="background">
          {location}
        </ul>
      </div>
    );
  }
}
