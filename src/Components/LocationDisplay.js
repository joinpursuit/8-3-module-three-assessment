import "./LocationDisplay.css";

function LocationDisplay(props) {
  const { locations } = props;

  //display the locations
  const locationsList = locations.map((location, index) => {
    return (
      <li key={index}>
        <ul className="currentLocation">
          <li>
            <span>Name:</span> <span>{location.name}</span>
          </li>
          <li>
            <span>Climate:</span>
            <span>{location.climate}</span>
          </li>
          <li>
            <span>Terrain:</span> <span>{location.terrain}</span>
          </li>
        </ul>
      </li>
    );
  });

  return <ul className="locationsDisplay">{locationsList}</ul>;
}

export default LocationDisplay;
