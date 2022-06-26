import './LocationDetail.css'

function LocationDetail(props) {
  return (
    <div className='location-card'>
      {props.locationData.map((location, id) => {
        return (
          <ul key={id}>
            <li>
              Name: <span>{location.name}</span>
            </li>
            <li>
              Climate: <span>{location.climate}</span>
            </li>
            <li>
              Terrain : <span>{location.terrain}</span>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default LocationDetail
