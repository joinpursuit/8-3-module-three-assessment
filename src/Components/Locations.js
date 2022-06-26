import { React, Component } from 'react';
import './Locations.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      isToggleOn: false,
      sortedData: [],
      sortType: '',
    };
  }

  fetchLocations = () => {
    fetch('https://ghibliapi.herokuapp.com/locations')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('data', data);
        this.setState({ locations: data });
      })
      .catch((error) => {
        this.setState({ locations: [] });
      });
  };

  componentDidMount() {
    this.fetchLocations();
  }

  handleClick = () => {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  };

  sortArray = (type) => {
    const sorted = this.state.locations.sort((a, b) =>
      a[type] !== b[type] ? (a[type] < b[type] ? -1 : 1) : 0
    );
    this.setState({ locations: sorted });
  };

  handleButtonClick = (e) => {
    console.log('event', e.target.value);
    this.setState({ sortType: e.target.value });
    this.sortArray(e.target.value);
  };

  render() {
    let { isToggleOn, locations } = this.state;
    let locationsInfo = locations.map((location) => {
      return (
        <li className='container' key={location.id}>
          <ul className='card'>
            <li className='card-list'>
              <span><strong>Name: </strong></span>
              <span>{location.name}</span>
            </li>
            <li className='card-list'>
            <span><strong>Climate: </strong></span>
            <span>{location.climate}</span>
            </li>
            <li className='card-list'>
            <span><strong>Terrain: </strong></span>
            <span>{location.terrain}</span>
            </li>
            <li className='card-list'>
            <span><strong>Surface Water: </strong></span>
            <span>{location.surface_water}</span>
            </li>
          </ul>
        </li>
      );
    });

    return (
      <div className='locations'>
        <h1>List of Locations</h1>
        {isToggleOn ? (
          <div className='location-btns'>
            <button onClick={this.handleClick}> Hide Locations</button>
            <button value='name' onClick={(e) => this.handleButtonClick(e)}>
              Sort by Name
            </button>
            <button value='climate' onClick={(e) => this.handleButtonClick(e)}>
              Sort by Climate
            </button>
            <button value='terrain' onClick={(e) => this.handleButtonClick(e)}>
              Sort by Terrain
            </button>
          </div>
        ) : (
          <button onClick={this.handleClick}>Show Locations</button>
        )}

        {isToggleOn ?<ul>{ locationsInfo }</ul>: ''}
      </div>
    );
  }
}

export default Home;
