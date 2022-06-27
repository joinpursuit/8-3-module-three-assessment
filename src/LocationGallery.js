import React from 'react';
import LocationEntry from './LocationEntry';

const LocationGallery = (props) => {
  const displayLocations = () => {
    return props.locations.map((location) => {
      return <LocationEntry url={location.url} />;
    });
  };

  return <section>{displayLocations()}</section>;
};
export default LocationGallery;
