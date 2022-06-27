import React from 'react';

const LocationEntry = (props) => {
  return (
    <div className='expandLocation'>
      <p>Button Clicked, Locations Expanded</p>
      <div>
        <section className='locationName'>
          <h2 id='name'>Name: {props.url}</h2>
        </section>
        <section className='locationClimate'>
          <h2>Climate: {props.url}</h2>
        </section>
        <section className=' locationTerrain'>
          <h2>Terrain: {props.url}</h2>
        </section>
      </div>
    </div>
  );
};
export default LocationEntry;
