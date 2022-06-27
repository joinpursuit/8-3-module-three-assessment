import { render } from '@testing-library/react';
import React from 'react';
import ExpandLocInfo from './ExpandLocInfo';
import './Location.css';

class Location extends React.Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
    };
  }

  /* componentDidMount() {
    const url = 'https://ghibliapi.herokuapp.com/locations?format=j1';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ locations: data.results[0] });
    console.log(data.results[0]);
  } */
  toggleShowLocation = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    const { showMore } = this.state;
    return (
      <div className='locations'>
        <h1>List of Locations</h1>
        <button id='ShowLocationBtn' onClick={() => this.toggleShowLocation()}>
          {showMore ? 'Hide Locations' : 'Show Locations'}
        </button>
      </div>
    );
  }
}
export default Location;
