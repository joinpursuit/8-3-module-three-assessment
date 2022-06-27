import React from 'react';
import ExpandLocClass from './ExpandLocClass';
import './Location.css';
const url = 'https://ghibliapi.herokuapp.com/locations?format=j1';
async function getLocationInfo() {
  const response = await fetch(url);
  const data = await response.json();

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

    return (
      <div className='locations'>
        <h1>List of Locations</h1>
        <button id='ShowLocationBtn' onClick={() => this.toggleShowLocation()}>
          {showMore ? 'Hide Locations' : 'Show Locations'}
        </button>
        <article>
          <div>
            {showMore ? (
              <ExpandLocClass toggleShowLocation={this.toggleShowLocation} />
            ) : null}
          </div>
        </article>
      </div>
    );
  }
}
export default Location;
