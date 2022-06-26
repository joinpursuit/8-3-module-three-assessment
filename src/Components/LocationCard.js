import "./LocationCard.css";

const LocationCard = ({ location }) => {
  const { name, climate, terrain } = location;
  return (
    <ul className="card">
      <span className="mini-card">
        <li>
          Name: <span>{name}</span>
        </li>
        <li>
          <span>
            Climate: <span>{climate}</span>
          </span>
        </li>
        <li>
          Terrain:<span>{terrain}</span>
        </li>
      </span>
    </ul>
  );
};

export default LocationCard;
