import React, { useState } from "react";

  const LocationsView = (props) => {
  //
  const { locations } = props;

  const listItems = locations.map((location) => {
    return  <li key={location.id} >
              <ul className="item">
                <li>Name: <span>{location.name}</span> </li>
                <li>Climate: <span>{location.climate}</span> </li>
                <li>Terrain: <span>{location.terrain}</span> </li>
              </ul>
            </li>
            
  })

  return (
    <ul className="grid__main">
      {listItems}
    </ul>
  )
}

export default LocationsView;