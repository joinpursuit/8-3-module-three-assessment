import { React, Component } from 'react';
import './Species.css';

class Species extends Component {
  constructor() {
    super();
    this.state = { allSpecies: [] };
  }
  fetchAllSpecies = () => {
    fetch('https://ghibliapi.herokuapp.com/species')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ allSpecies: data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ allSpecies: [] });
      });
  };
  componentDidMount() {
    this.fetchAllSpecies();
  }

  render() {
    const speciesArr = this.state.allSpecies.map((species) => {
      return (
        <div className='card-info' key={species.id}>
          <h3>{species.name}</h3>

          <p>
            <strong>Classification:</strong>
            {species.classification}
          </p>
          <p>
            <strong>Eye Color:</strong>
            {species.eye_colors}
          </p>
          <p>
            <strong>Hair Color: </strong>
            {species.hair_colors}
          </p>
        </div>
      );
    });
    return (
      <section className='species-container'>
        <h1>Species</h1>
        <div className='vehicle-cards'>{speciesArr}</div>
      </section>
    );
  }
}

export default Species;
