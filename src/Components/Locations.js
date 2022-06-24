import React from "react";
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
  sortedByName = () => {
    const sorted = this.state.locations.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    this.setState({ locations: sorted });
  };

  populateLocations = (array) => {
    return array.map((location, idx) => {
      return (
        <ul key={idx}>
          <li>name: {location.name}</li>
          <li>climate: {location.climate}</li>
          <li>terrain: {location.terrain}</li>
        </ul>
      );
    });
  };

  render() {
    const { show, locations } = this.state;
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button
          onClick={() => {
            this.unorderedLocations();
          }}
          type="button"
        >
          {show ? "Hide Locations" : "Show Locations"}
        </button>
        <button
          onClick={() => {
            this.sortedByName();
          }}
          type="button"
        >
          Sort By Name
        </button>

        <ul>{show ? this.populateLocations(locations) : null}</ul>
      </div>
    );
  }
}

export default Locations;
