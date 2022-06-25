function LocationDisplay(props) {
  const { locations } = props;
  const locationsList = locations.map((location, index) => {
    return (
      <li key={index}>
        <ul>
          <li>Name: {location.name}</li>
          <li>Climate: {location.climate}</li>
          <li>Terrain: {location.terrain}</li>
        </ul>
      </li>
    );
  });

  return <ul>{locationsList}</ul>;
}

export default LocationDisplay;
