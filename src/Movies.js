import React from 'react';
import './Movies.css';
function errorHandler(error) {
  console.log(error);
  return error;
}

let BASE_URL = 'https://ghibliapi.herokuapp.com';
let PATH = '/films';
let API_FORMAT = '?format=j1';
class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      ghibliData: [],
      values: '',
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}${PATH}${API_FORMAT}`)
      .then((response) => response.json())
      .then((result) => this.setState({ ghibliData: result }))
      .catch(errorHandler);
  }
  onChange = (event) => {
    this.setState({ values: event.target.value });
  };

  render() {
    console.log(this.state);
    let { ghibliData, values } = this.state;
    const ghibliMovie = ghibliData.map((movie) => {
      return <option key={movie.id}>{movie.title}</option>;
    });
    let selectMovie = ghibliData.find((movie) => movie.title === values);
    return (
      <div id='MovieDiv' className='movies'>
        <h1> Select a Movie</h1>
        <select onChange={this.onChange} id='dropDown'>
          <option></option>
          {ghibliMovie}
        </select>
        <div id='MovieCard'>
          {selectMovie ? (
            <div className='MovieCardInnerDiv'>
              <section>
                <h2>{selectMovie.title}</h2>
                <h3> Release Date: {selectMovie.release_date}</h3>
              </section>
              <p>
                <h1>Description:</h1> {selectMovie.description}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default Movies;
