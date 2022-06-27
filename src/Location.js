import { render } from '@testing-library/react';
import React from 'react';
import ExpandLocInfo from './ExpandLocInfo';
import './Location.css';
const url = 'https://ghibliapi.herokuapp.com/locations?format=j1';
async function getLocationInfo() {
  const response = await fetch(url);
  const data = await response.json();
  const { name, climate, terrain } = data;
  console.log(data);
}
getLocationInfo();

class Location extends React.Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
    };
  }

  toggleShowLocation = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    const { showMore } = this.state;

    /* const locationCards = data.map((name, climate, terrain) => {
      return <div key={name} value1={climate} value2={terrain} />;
    }); */
    return (
      <div className='locations'>
        <h1>List of Locations</h1>
        <button id='ShowLocationBtn' onClick={() => this.toggleShowLocation()}>
          {showMore ? 'Hide Locations' : 'Show Locations'}
          <div>
            {showMore ? (
              <ExpandLocInfo toggleShowLocation={this.toggleShowLocation} />
            ) : null}
          </div>
        </button>
      </div>
    );
  }
}
export default Location;
