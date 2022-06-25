import { Component } from 'react';
import './Locations.css';

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      sort: '',
      locations: [...this.props.allLocations],
    };
  }

  toggleShow = () => {
    this.setState((previousState) => ({
      show: !previousState.show,
    }));
  };

  sortBy = (event) => {
    event.preventDefault();
    this.setState({
      sort: event.target.value,
    });
  };

  //   sortByClimate = (event) => {
  //     event.preventDefault()
  //     const [ ...byClimate ] = this.props.allLocations

  //     const array2 = byClimate.sort(function(a, b) {
  //         const climateA = a.climate.toUpperCase(); // ignore upper and lowercase
  //         const climateB = b.climate.toUpperCase(); // ignore upper and lowercase
  //         if (climateA < climateB) {
  //           return -1;
  //         }
  //         if (climateA > climateB) {
  //           return 1;
  //         }

  //         // names must be equal
  //         return 0;
  //       });

  //       this.setState({
  //           sort: event.target.value,
  //           locations: [...array2]
  //       })
  //   }

  //   sortByTerrain = (event) => {
  //     event.preventDefault()
  //     const [ ...byTerrain ] = this.props.allLocations

  //     const array3 = byTerrain.sort(function(a, b) {
  //         const terrainA = a.terrain.toUpperCase(); // ignore upper and lowercase
  //         const terrainB = b.terrain.toUpperCase(); // ignore upper and lowercase
  //         if (terrainA < terrainB) {
  //           return -1;
  //         }
  //         if (terrainA > terrainB) {
  //           return 1;
  //         }

  //         // names must be equal
  //         return 0;
  //       });

  //       this.setState({
  //           sort: event.target.value,
  //           locations: [...array3]
  //       })
  //   }

  render() {
    const getSort = (arr, sort) => {
      if (sort) {
        const key = sort;
        const example = arr.sort(function (a, b) {
          const A = a[key]; // ignore upper and lowercase
          const B = b[key]; // ignore upper and lowercase
          if (A < B) {
            return -1;
          } else if (A > B) {
            return 1;
          } else return 0;
        });
        return example;
      } else {
        return arr;
      }
    };

    const desiredLocations = getSort(this.state.locations, this.state.sort).map(
      (location) => {
        return (
          <li key={location.id}>
            <ul>
              <li>{location.name}</li>
              <li>{location.climate}</li>
              <li>{location.terrain}</li>
            </ul>
          </li>
        );
      }
    );

    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={this.toggleShow}>
          {this.state.show ? 'HIDE' : 'SHOW'} LOCATIONS
        </button>
        {this.state.show ? (
          <>
            <button onClick={this.sortBy} value="name">
              SORT BY NAME
            </button>
            <button onClick={this.sortBy} value="climate">
              SORT BY CLIMATE
            </button>
            <button onClick={this.sortBy} value="terrain">
              SORT BY TERRAIN
            </button>
          </>
        ) : null}
        {this.state.show ? (
          <ul className="location-grid">{desiredLocations}</ul>
        ) : null}
      </div>
    );
  }
}

export default Locations;
