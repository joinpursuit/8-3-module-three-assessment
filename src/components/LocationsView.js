import React, { useState } from "react";

  const LocationsView = (props) => {
  //
  const { locations } = props;

  const listItems = locations.map((location) => {
    return  <li key={location.id} >
              <p>Name: <span>{location.name}</span> </p>
              <p>Climate: <span>{location.climate}</span> </p>
              <p>Terrain: <span>{location.terrain}</span> </p>
            </li>
            
  })

  return (
    <ul className="grid__list">
      {listItems}
    </ul>
  )
}

export default LocationsView;