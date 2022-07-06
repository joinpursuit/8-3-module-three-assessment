import { React, Component } from 'react';
import './Locations.css';
import Image from './image/middleofthelake.jpeg';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      isToggleOn: false,
      sortedData: [],
      sortType: 'name',
      sortBy: 'name',
    };
  }

  fetchLocations = () => {
    fetch('https://ghibliapi.herokuapp.com/locations') //start api request
      .then((response) => {
        return response.json();
        //this callback happens when we get the request headers but before we have the entire body.wait for all the data to come in and parse out our json object
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
    this.setState((isToggleOn) => ({ isToggleOn: !this.state.isToggleOn }));
  };

  sortArray = (key) => {
    //do not mutate the state directly so  make a shallow copy of it ;from now on use the shallow copy as to not mutate the state value
    const loc = [...this.state.locations];
    //
    const sorted = loc.sort((a, b) =>
      a[key].toLowerCase() !== b[key].toLowerCase()
        ? a[key].toLowerCase() < b[key].toLowerCase()
          ? -1
          : 1
        : 0
    );
    this.setState({ locations: sorted, sortBy: key });
  };

  handleButtonClick = (e) => {
    console.log('event', e.target.value);
    this.setState({ sortType: e.target.value });
    this.sortArray(e.target.value);
  };

  render() {
    let key1 = '',
      key2 = '',
      key3 = '';
    if (this.state.sortBy === 'name') {
      key1 = 'name';
      key2 = 'climate';
      key3 = 'terrain';
    } else if (this.state.sortBy === 'climate') {
      key1 = 'climate';
      key2 = 'name';
      key3 = 'terrain';
    } else {
      key1 = 'terrain';
      key2 = 'name';
      key3 = 'climate';
    }

    let { isToggleOn, locations } = this.state;
    let locationsInfo = locations.map((location) => {
      return (
        <li className='container' key={location.id}>
          <ul className='card'>
            <li className='card-list'>
              <span>
                <strong>{key1}: </strong>
              </span>
              <span>{location[key1]}</span>
            </li>
            <li className='card-list'>
              <span>
                <strong>{key2}: </strong>
              </span>
              <span>{location[key2]}</span>
            </li>
            <li className='card-list'>
              <span>
                <strong>{key3}: </strong>
              </span>
              <span>{location[key3]}</span>
            </li>
            <li className='card-list'>
              <span>
                <strong>Surface Water: </strong>
              </span>
              <span>{location.surface_water}</span>
            </li>
            <li >
              <span>
                <a href='More Info'>Moreinfo</a>
              </span>
            </li> 
          </ul>
        </li>
      );
    });

    return (
      <div
        className='locations'
        style={{
          backgroundImage: 'url(' + Image + ')',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
        }}
      >
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
        {/* {isToggleOn ? <ul className='results'>{locationsInfo}</ul> : ''} */}
        {isToggleOn && <ul className='results'>{locationsInfo}</ul>}
      </div>
    );
  }
}

export default Home;
