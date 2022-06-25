import { Component } from 'react';
import './Locations.css';

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      sort: '',
      locations: [],
    };
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/locations')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({
          locations: [...response],
        });
      });
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
              <li>
                <span>Name:</span>
                <span>{location.name}</span>
              </li>
              <li>
                <span>Climate:</span>
                <span>{location.climate}</span>
              </li>
              <li>
                <span>Terrain:</span>
                <span>{location.terrain}</span>
              </li>
            </ul>
          </li>
        );
      }
    );

    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={this.toggleShow}>
          {this.state.show ? 'Hide' : 'Show'} Locations
        </button>
        {this.state.show ? (
          <>
            <button onClick={this.sortBy} value="name">
              Sort by Name
            </button>
            <button onClick={this.sortBy} value="climate">
              Sort by Climate
            </button>
            <button onClick={this.sortBy} value="terrain">
              Sort by Terrain
            </button>
          </>
        ) : null}
        {this.state.show ? (
          <ul className="location">{desiredLocations}</ul>
        ) : null}
      </div>
    );
  }
}

export default Locations;
