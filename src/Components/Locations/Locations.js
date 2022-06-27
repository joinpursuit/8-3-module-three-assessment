import { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./Locations.scss";

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locationsList: [],
      show: false,
      name: "",
      climate: "",
      terrain: "",
      errors: null,
    };
  }

  componentDidMount = () => {
    axios.get(`https://ghibliapi.herokuapp.com/locations/`).then((res) => {
      this.setState({
        locationsList: res.data,
      });
    });
  };

  handleClick = (e) => {
    e.preventDefault();

    this.setState({
      show: !this.state.show,
    });
  };

  renderLocations = () => {
    const { locationsList } = this.state;

    return locationsList.map((location) => {
      return (
        <li key={location.id}>
          <ul className="locationItems">
            <li>
              <span></span>
            </li>
            <li className="listItem">
              <strong>Name: </strong>
              <span>{location.name}</span>
            </li>

            <li className="listItem">
              <strong>Climate: </strong>
              <span>{location.climate}</span>
            </li>

            <li className="listItem">
              <strong>Terrain: </strong>
              <span>{location.terrain}</span>
            </li>
          </ul>
        </li>
      );
    });
  };

  sortByName = () => {
    const { locationsList } = this.state;

    const locationsListCopy = [...locationsList];

    locationsListCopy.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    this.setState({
      locationsList: locationsListCopy,
    });
  };

  sortByClimate = () => {
    const { locationsList } = this.state;

    const locationsListCopy = [...locationsList];

    locationsListCopy.sort((a, b) => {
      if (a.climate < b.climate) {
        return -1;
      }
      if (a.climate > b.climate) {
        return 1;
      }
      return 0;
    });

    this.setState({
      locationsList: locationsListCopy,
    });
  };

  sortByTerrain = () => {
    const { locationsList } = this.state;

    const locationsListCopy = [...locationsList];

    locationsListCopy.sort((a, b) => {
      if (a.terrain < b.terrain) {
        return -1;
      }
      if (a.terrain > b.terrain) {
        return 1;
      }
      return 0;
    });

    this.setState({
      locationsList: locationsListCopy,
    });
  };

  render() {
    const { show } = this.state;

    return (
      <section className="locations">
        <h1>List of Locations</h1>
        <section className="sortByButtons">
          <Button variant="dark" onClick={this.handleClick}>
            {show ? "Hide Locations" : "Show Locations"}
          </Button>
          {show ? (
            <>
              <Button
                variant="secondary"
                onClick={this.sortByName}
                value="sortByName"
              >
                Sort by Name
              </Button>
              <Button
                variant="secondary"
                onClick={this.sortByClimate}
                value="sortByClimate"
              >
                Sort by Climate
              </Button>
              <Button
                variant="secondary"
                onClick={this.sortByTerrain}
                value="sortByTerrain"
              >
                Sort by Terrain
              </Button>
            </>
          ) : null}
        </section>
        {show ? (
          <ul className="locationDetails">{this.renderLocations()}</ul>
        ) : null}
      </section>
    );
  }
}

export default Locations;
