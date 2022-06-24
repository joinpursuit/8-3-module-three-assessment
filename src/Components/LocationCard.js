import "./LocationCard.css";

const LocationCard = ({ location }) => {
  return (
    <div className="card">
      <p>Name: {location.name}</p>
      <p>Climate: {location.climate}</p>
      <p>Terrain: {location.terrain}</p>
    </div>
  );
};

export default LocationCard;
