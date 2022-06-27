import React from 'react';
import axios from 'axios';
import './Movies.css';

const FILMS_URL = 'https://ghibliapi.herokuapp.com/films';

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovies: '',
    };
  }

  componentDidMount = () => {
    axios.get(FILMS_URL).then((results) => {
      this.setState({ movies: results.data });
    });
  };

  handleSelectMovies = (e) => {
    this.setState({ selectedMovies: e.target.value });
  };

  render() {
    let { movies, selectedMovies } = this.state;
    let movieOptions = movies.map((movie) => {
      return <option key={movie.id}>{movie.title}</option>;
    });
    let foundMovie = movies.find((movie) => movie.title === selectedMovies);

    return (
      <div className='movies'>
        <h1 className='movies__header'>Select A Movie</h1>
        <select className='select__movies' onChange={this.handleSelectMovies}>
          <option defaultChecked value=''></option>
          {movieOptions}
        </select>
        <div>
          {foundMovie ? (
            <div className='movies__details'>
              <h2 className='movies__title'>Title: {foundMovie.title}</h2>
              <img
                className='movies__img'
                src={foundMovie.image}
                alt='movie-pic'
                style={{ width: '300px', height: 'auto' }}
              />
              <br />
              <img
                className='movies__img'
                src={foundMovie.movie_banner}
                alt='movie-banner'
                style={{ width: '300px', height: 'auto' }}
              />
              <p className='movies__title'>
                <strong>Released Date: </strong> {foundMovie.release_date}
              </p>
              <p className='movies__title'>
                <strong>Movie Description: </strong>
                {foundMovie.description}
              </p>
              <p>
                <strong>Director: </strong>
                {foundMovie.director}
              </p>
              <p>
                <strong>Running time: </strong>
                {foundMovie.running_time} minutes
              </p>
              <p>
                <strong>Movie rating: </strong>
                {foundMovie.rt_score}/100
              </p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Movies;
