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
      ghibliDataMovies: [],
      values: '',
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}${PATH}${API_FORMAT}`)
      .then((response) => response.json())
      .then((result) => this.setState({ ghibliDataMovies: result }))
      .catch(errorHandler);
  }
  onChange = (event) => {
    this.setState({ values: event.target.value });
  };

  render() {
    console.log(this.state);
    let { ghibliDataMovies, values } = this.state;
    const ghibliMovie = ghibliDataMovies.map((movie) => {
      return <option key={movie.id}>{movie.title}</option>;
    });
    let selectMovie = ghibliDataMovies.find((movie) => movie.title === values);
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
                <h1>{selectMovie.title}</h1>
                <h3> Release Date: {selectMovie.release_date}</h3>
              </section>
              <p>
                <h2>Description:</h2> {selectMovie.description}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default Movies;
