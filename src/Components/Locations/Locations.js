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
            <li></li>
            <li className="listItem">
              <strong>Name: </strong> {location.name}
            </li>
            <br />
            <br />
            <li className="listItem">
              <strong>climate: </strong>
              {location.climate}
            </li>
            <br />
            <br />
            <li className="listItem">
              <strong>Terrain: </strong>
              {location.terrain}
            </li>
          </ul>
        </li>
      );
    });
  };

  render() {
    const { show } = this.state;

    return (
      <section className="locations">
        <h1>List of Locations</h1>
        <Button variant="dark" onClick={this.handleClick}>
          {show ? "Hide Locations" : "Show Locations"}
        </Button>
        {show ? (
          <ul className="locationDetails">{this.renderLocations()}</ul>
        ) : null}
      </section>
    );
  }
}

export default Locations;
