import React from "react";
import "../App.css";

class Locations extends React.Component {

constructor() {
    super();
    this.state = { 
        locations:[],
        showLocations: false,
    }
}

componentDidMount() {
    const URL = 'https://ghibliapi.herokuapp.com/locations'
    fetch(URL)
    .then((response) => response.json())
    .then((data) => this.setState({locations: data }))
}

    toggleButton = () => {
        this.setState({showLocations: !this.state.showLocations})
        }

        sortLocal = (target) => {
            
        
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
            

render() { 
const locationDisplay = this.state.locations.map((location,) => {
    return (
        <li className="locations"key={location.id}>
            <ul className="locationArea">
                <li>
                    <span>Name:</span> <span>{location.name}</span>
                </li>
                <li>
                    <span>Climate:</span> <span>{location.climate}</span>
                </li>
                <li>
                <span>Terrain:</span> <span>{location.terrain}</span>
                </li>
            
            </ul>
                
        </li>
    )
})
    return ( 
    <div className="locations-header">
        <h1>List of Locations</h1>
        <button onClick={this.toggleButton}>{!this.state.showLocations ? "Show Locations" : "Hide Locations"}</button>
        { this.state.showLocations ? locationDisplay : ''}
        <div> 
            <button
              className="button"
              onClick={() => this.sortLocal("name")}
            >
              Sort by Name
            </button>
            <button
              className="button"
              onClick={() => this.sortLocal("climate")}
            >
              Sort by Climate
            </button>
            <button
              className="button"
              onClick={() => this.sortLocal("terrain")}
            >
              Sort by Terrain
            </button>
            <ul className="locationsList">
                {this.state.display ? locationDisplay : null}
            </ul>
        </div>
    </div>
    );
}
}
export default Locations;