import React from 'react';
import LocationEntry from './LocationEntry';

// Felt like I was close to a breakthrough getting the data from the API here, hadn't enough time though.
const LocationGallery = (props) => {
  const displayLocations = () => {
    return props.locations.map((location) => {
      return <LocationEntry url={location.url} />;
    });
  };

  return <section>{displayLocations()}</section>;
};
export default LocationGallery;
