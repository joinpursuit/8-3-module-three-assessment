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
    const { show, sort, locations } = this.state;

    const getSortedArray = (array, sort) => {
      if (sort) {
        const sortedArray = array.sort(function (a, b) {
          const A = a[sort]; // ignore upper and lowercase
          const B = b[sort]; // ignore upper and lowercase
          if (A < B) {
            return -1;
          } else if (A > B) {
            return 1;
          } else return 0;
        });
        return sortedArray;
      } else {
        return array;
      }
    };

    const desiredLocations = getSortedArray(locations, sort).map((location) => {
      return (
        <li className='individual-location' key={location.id}>
          <ul className='individual-grid'>
            <li>
              <span className='bold'>Name:</span>
              <span>{location.name}</span>
            </li>
            <li>
              <span className='bold'>Climate:</span>
              <span>{location.climate}</span>
            </li>
            <li>
              <span className='bold'>Terrain:</span>
              <span>{location.terrain}</span>
            </li>
          </ul>
        </li>
      );
    });

    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={this.toggleShow}>
          {show ? 'Hide' : 'Show'} Locations
        </button>
        {show ? (
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
        {show ? <ul className="location-grid">{desiredLocations}</ul> : null}
      </div>
    );
  }
}

export default Locations;
