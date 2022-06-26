import './LocationDetail.css'

function LocationDetail(props) {
  return (
    <div className='location-card'>
      {props.locations.map((location, id) => (
        <ul key={id}>
          <li>
            <strong>Name: </strong>
            <span onClick={() => props.handleSort(location)}>{location.name}</span>
          </li>
          <li>
            <strong>Climate: </strong>
            <span>{location.climate}</span>
          </li>
          <li>
            <strong>Terrain: </strong>
            <span> {location.terrain}</span>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default LocationDetail
