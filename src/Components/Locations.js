import React, { Component } from "react";

export default class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locationArr: [],
      button: true,
    };
  }

  getMovies = () => {
    const BASE_URL = "https://ghibliapi.herokuapp.com/";
    fetch(`${BASE_URL}locations`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          locationArr: result,
        });
      });
  };

  handleClick = () => {
    this.setState({
      button: !this.state.button,
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  nameSort = () => {
    const locationNameArr = [];
    this.state.locationArr.map((location) => {
      locationNameArr.push(location.name);
      locationNameArr.sort().map((location) => {
        return <li>{location}</li>;
      });
    });
  };

  generateButtons = () => {
    return (
      <span>
        <button onClick={this.nameSort}>Sort by Name</button>
        <button>Sort by Climate</button>
        <button>Sort by Terrain</button>
      </span>
    );
  };

  render() {
    let { locationArr, button } = this.state;
    let counter = 0;

    const location = locationArr.map((location) => {
      if (!button) {
        return (
          <li key={counter++} className="locations">
            <section>
              <ul key={location.id}>
                <li key={location.id}>
                  <p>
                    <b>Name: </b>
                    {location.name}
                  </p>
                  <p>
                    <b>Climate: </b> {location.climate}
                  </p>
                  <p>
                    <b>Terrain: </b> {location.terrain}
                  </p>
                </li>
              </ul>
            </section>
          </li>
        );
      }
      return <div key={counter++} />;
    });
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={this.handleClick}>
          {this.state.button ? "Show Locations" : "Hide Locations"}
        </button>
        {this.state.button ? "" : <>{this.generateButtons()}</>}
        <ul key={location.id}>{location}</ul>
      </div>
    );
  }
}
