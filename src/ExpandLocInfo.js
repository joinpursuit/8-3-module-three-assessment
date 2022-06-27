function ExpandLocInfo({ showMore }) {
  const url = 'https://ghibliapi.herokuapp.com/locations?format=j1';
  async function getLocationInfo() {
    const response = await fetch(url);
    const data = await response.json();
    const { name, climate, terrain } = data;
    console.log(data);
    console.log(name);
    console.log(climate);
    console.log(terrain);
  }
  getLocationInfo();
  if (showMore === true) {
    return (
      <div className='expandLocation'>
        <p>Button Clicked, Locations Expanded</p>
        <div>
          <section className='locationName'>
            <h2 id='name'>Name: </h2>
          </section>
          <section className='locationClimate'>
            <h2>Climate: </h2>
          </section>
          <section className=' locationTerrain'>
            <h2>Terrain: </h2>
          </section>
        </div>
      </div>
    );
  } else {
    return <p className='ExpandLocationListener'></p>;
  }
}
export default ExpandLocInfo;
