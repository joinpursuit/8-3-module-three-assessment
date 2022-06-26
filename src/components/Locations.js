import React from "react";

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      container: false,
    };
  }
  componentDidMount = () => {
    fetch("https://ghibliapi.herokuapp.com/locations/")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ locations: json });
        // console.log(json);
      });
  };

  render() {
    let onButtonClick = () => {
      this.setState({ container: !this.state.container });
    };
    const show = this.state.container;
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button className="showButton" onClick={onButtonClick}>
          {show ? "Hide Locations" : "Show Locations"}
        </button>
        {show && (
          <section>
            <center>
              <button>Sort by Name</button>
              <button>Sort by Climate</button>
              <button>Sort by Terrain</button>
            </center>
            <div className="places">
              {this.state.locations.map((obj) => {
                return (
                  <ul key={obj.name}>
                    <li>Name: {obj.name}</li>
                    <li>Climate: {obj.climate}</li>
                    <li>Terrain: {obj.terrain}</li>
                  </ul>
                );
              })}
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default Locations;
