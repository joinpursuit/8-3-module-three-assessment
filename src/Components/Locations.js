import React from "react";
import LocationCard from "./LocationCard";
import "./Locations.css";

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      clicked: false,
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
    });
  };

  render() {
    return (
      <div>
        <h1>List of Locations</h1>
        <button onClick={() => this.updateClick()}>
          {this.state.clicked ? "Hide Locations" : "Show Locations"}
        </button>
        <div className="locations">
          {this.state.clicked ? (
            <section>
              <button
                onClick={() => {
                  this.sortByName(this.state.locations);
                }}
              >
                Sort by Name
              </button>
              <button onClick={() => this.sortByClimate(this.state.locations)}>
                Sort by Climate
              </button>
              <button onClick={() => this.sortByTerrain(this.state.locations)}>
                Sort by Terrain
              </button>{" "}
            </section>
          ) : null}
          <div className={this.state.clicked ? "container" : "hidden"}>
            <ul>
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
