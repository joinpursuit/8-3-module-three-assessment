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

  render() {
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={() => this.updateClick()}>
          {this.state.clicked ? "Hide Locations" : "Show Locations"}
        </button>
        <div className={this.state.clicked ? "container" : "hidden"}>
          {this.state.locations.map((location) => {
            return <LocationCard location={location} />;
          })}
        </div>
      </div>
    );
  }
}

export default Locations;
