import './LocationDetail.css'

function LocationDetail(props) {
  return (
    <div className='location-card'>
      {props.locationData.map((location, id) => {
        return (
          <ul key={id}>
            <li>
              <strong> Name: </strong>
              <span>{location.name}</span>
            </li>
            <li>
              <strong>Climate: </strong>
              <span>{location.climate}</span>
            </li>
            <li>
              <strong>Terrain: </strong>
              <span>{location.terrain}</span>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default LocationDetail
