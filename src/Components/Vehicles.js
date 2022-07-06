import { React, Component } from 'react';
import './Vehicles.css';
class Vehicles extends Component {
  constructor() {
    super();
    this.state = {
      allVehicles: [],
    };
  }
  fetchAllVehicles = () => {
    fetch('https://ghibliapi.herokuapp.com/vehicles')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ allVehicles: data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ allMovies: [] });
      });
  };
  componentDidMount() {
    this.fetchAllVehicles();
  }

  render() {
    const vehiclesArr = this.state.allVehicles.map((vehicle) => {
      return (
        <div className='vehicle-info' key={vehicle.id}>
          <h3>{vehicle.name}</h3>

          <p>
            <strong>Class:</strong>
            {vehicle.vehicle_class}
          </p>
          <p>
            <strong>Length:</strong>
            {vehicle.length}
          </p>
          <p>
            <strong>Description: </strong>
            {vehicle.description}
          </p>
        </div>
      );
    });
    return (
      <section className='vehicles-container'>
        <h1>Vehicles</h1>
        <div className='cards'>{vehiclesArr}</div>
      </section>
    );
  }
}

export default Vehicles;
