import React from "react";
import "./Location.css";

class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, locations: null };
  }
  unorderedLocations = () => {
    this.setState({
      show: !this.state.show,
      locations: this.props.locationsArray,
    });
  };
  sortedByCriteria = (criteria) => {
    const sorted = this.state.locations.sort(function (a, b) {
      return a[criteria].localeCompare(b[criteria]);
    });
    this.setState({ locations: sorted });
  };

  populateLocations = (array) => {
    return array.map((location, idx) => {
      return (
        <li className="single-location">
          <ul key={idx}>
            <span>
              <li className="text">
                <strong>Name:</strong>{" "}
                <span className="value">{location.name}</span>
              </li>
              <li>
                <strong> Climate:</strong> <span>{location.climate}</span>
              </li>
              <li>
                <strong>Terrain:</strong> <span>{location.terrain}</span>
              </li>
            </span>
          </ul>
        </li>
      );
    });
  };

  render() {
    const { show, locations } = this.state;
    return (
      <div className="locations">
        <div className="menu">
          <h2>List of Locations</h2>
          <button
            onClick={() => {
              this.unorderedLocations();
            }}
            type="button"
          >
            {show ? "Hide Locations" : "Show Locations"}
          </button>
          {show && (
            <button
              onClick={() => {
                this.sortedByCriteria("name");
              }}
              type="button"
            >
              Sort by Name
            </button>
          )}
          {show && (
            <button
              onClick={() => {
                this.sortedByCriteria("climate");
              }}
              type="button"
            >
              Sort by Climate
            </button>
          )}
          {show && (
            <button
              onClick={() => {
                this.sortedByCriteria("terrain");
              }}
              type="button"
            >
              Sort by Terrain
            </button>
          )}
        </div>
        <ul className="location-gallery">
          {show && this.populateLocations(locations)}
        </ul>
      </div>
    );
  }
}

export default Locations;
