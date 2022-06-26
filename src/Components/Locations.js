import React from "react";
import LocationDisplay from "./LocationDisplay";
import "./Location.css";

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locationVisible: false, //hide or display location
      locations: [], //array of ghibli movie's locations
    };
  }

  //toggles the visibility of the locations
  locationVisibleHandler = () => {
    this.setState({ locationVisible: !this.state.locationVisible });
  };

  /**
   * Set the state with sorted locations according to the target, target
   * could be name, climate or terrain
   * @param {String} target - name, climate or terrain
   */
  sortByHandler = (target) => {
    const URL = "https://ghibliapi.herokuapp.com/locations";

    fetch(URL)
      .then((result) => result.json())
      .then((data) => {
        const copyOfLocations = data;
        copyOfLocations.sort((locationA, locationB) => {
          if (locationA[target] > locationB[target]) {
            return 1;
          }
          if (locationA[target] < locationB[target]) {
            return -1;
          }

          return 0;
        });
        this.setState({ locations: copyOfLocations });
      })
      .catch((error) => console.log(error));
  };

  //Load the movies data after page was load
  componentDidMount() {
    const URL = "https://ghibliapi.herokuapp.com/locations";

    fetch(URL)
      .then((result) => result.json())
      .then((data) => {
        this.setState({ locations: data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { locationVisible, locations } = this.state;

    return (
      <div className="locations">
        <h3>List of Locations</h3>
        <button className="button" onClick={this.locationVisibleHandler}>
          {locationVisible ? "Hide Locations" : "Show Locations"}
        </button>
        {locationVisible ? (
          <>
            <button
              className="button"
              onClick={() => this.sortByHandler("name")}
            >
              Sort by Name
            </button>
            <button
              className="button"
              onClick={() => this.sortByHandler("climate")}
            >
              Sort by Climate
            </button>
            <button
              className="button"
              onClick={() => this.sortByHandler("terrain")}
            >
              Sort by Terrain
            </button>
          </>
        ) : null}
        {locationVisible ? <LocationDisplay locations={locations} /> : null}
      </div>
    );
  }
}

export default Locations;
