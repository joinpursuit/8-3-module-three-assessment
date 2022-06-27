import React from 'react';
//import LocationGallery from './LocationGallery';     //map is undefined, causes runtime errors.

class ExpandLocClass extends React.Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
      name: '',
      climate: '',
      terrain: '',
    };
  }

  updateLocationalInformation = () => {
    fetch('https://ghibliapi.herokuapp.com/locations?format=j1')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          locName: data.name,
          locClimate: data.climate,
          locTerrain: data.terrain,
          showMore: true,
        });
      });
  };
  componentDidMount() {
    this.updateLocationalInformation();
  }
  render() {
    console.log(this.state);
    /* const locationCards = data.map((name, climate, terrain) => {
      return <div key={name} value1={climate} value2={terrain} />;
    }); */
    if (this.state.showMore === true) {
      return (
        <div className='expandLocation'>
          <p>Button Clicked, Locations Expanded</p>

          <div>
            <section className='locationName'>
              <h2 id='name'>Name: Placeholder</h2>
            </section>
            <section className='locationClimate'>
              <h2>Climate: Placeholder</h2>
            </section>
            <section className=' locationTerrain'>
              <h2>Terrain: Placeholder</h2>
            </section>
          </div>
        </div>
      );
    } else {
      return <p className='ExpandLocationListener'></p>;
    }
  }
}
export default ExpandLocClass;
