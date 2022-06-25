import React from "react";
import LocationDisplay from "./LocationDisplay";

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locationVisible: false,
      locations: [],
    };
  }

  locationVisibleHandler = () => {
    this.setState({ locationVisible: !this.state.locationVisible });
  };

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
        <button onClick={this.locationVisibleHandler}>
          {locationVisible ? "Hide Locations" : "Show Locations"}
        </button>
        {locationVisible ? <LocationDisplay locations={locations} /> : null}
      </div>
    );
  }
}

export default Locations;
