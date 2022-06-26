import React from "react";
import LocationCard from "./LocationCard";
import "./Locations.css";

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      clicked: false,
      showClickedOn: false,
      nameClickedOn: false,
      climateClickedOn: false,
      terrainClickedOn: false,
    };
  }

  fetchLocations = () => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ locations: json });
      })
      .catch(() => {});
  };

  componentDidMount() {
    this.fetchLocations();
  }

  updateClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      showClickedOn: !this.state.showClickedOn,
    });
  };

  sortByName = (arrayOfLocations) => {
    this.setState({
      locations: arrayOfLocations.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      }),
      nameClickedOn: !this.state.nameClickedOn,
      climateClickedOn: false,
      terrainClickedOn: false,
    });
  };
  sortByClimate = (arrayOfLocations) => {
    this.setState({
      locations: arrayOfLocations.sort((a, b) => {
        if (a.climate < b.climate) {
          return -1;
        } else if (a.climate > b.climate) {
          return 1;
        } else {
          return 0;
        }
      }),
      nameClickedOn: false,
      climateClickedOn: !this.state.climateClickedOn,
      terrainClickedOn: false,
    });
  };
  sortByTerrain = (arrayOfLocations) => {
    this.setState({
      locations: arrayOfLocations.sort((a, b) => {
        if (a.terrain < b.terrain) {
          return -1;
        } else if (a.terrain > b.terrain) {
          return 1;
        } else {
          return 0;
        }
      }),
      nameClickedOn: false,
      climateClickedOn: false,
      terrainClickedOn: !this.state.terrainClickedOn,
    });
  };

  render() {
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button
          className={this.state.showClickedOn ? "clicked-on" : "not-clicked"}
          onClick={() => this.updateClick()}
        >
          {this.state.clicked ? "Hide Locations" : "Show Locations"}
        </button>
        <div>
          {this.state.clicked ? (
            <section>
              <button
                className={
                  this.state.nameClickedOn ? "name-clicked-on" : "not-clicked"
                }
                onClick={() => {
                  this.sortByName(this.state.locations);
                }}
              >
                Sort by Name
              </button>
              <button
                className={
                  this.state.climateClickedOn
                    ? "climate-clicked-on"
                    : "not-clicked"
                }
                onClick={() => this.sortByClimate(this.state.locations)}
              >
                Sort by Climate
              </button>
              <button
                className={
                  this.state.terrainClickedOn
                    ? "terrain-clicked-on"
                    : "not-clicked"
                }
                onClick={() => this.sortByTerrain(this.state.locations)}
              >
                Sort by Terrain
              </button>{" "}
            </section>
          ) : null}
          <div className={this.state.clicked ? "show" : "hidden"}>
            <ul className="container">
              {this.state.locations.map((location) => {
                return <LocationCard location={location} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Locations;
