import React, { Component } from 'react';
import './Movies.css';

class Movies extends Component {
  state = {
    selectedOption: '',
    movies: [],
  };

  fetchMovies = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ movies: data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ movies: [] });
      });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ selectedOption: e.target.value });
  };

  componentDidMount = (e) => {
    this.fetchMovies();
  };

  render() {
    const { movies, selectedOption } = this.state;
    const selected = movies.find((movie) => movie.title === selectedOption);

    return (
      <div className='movies'>
        <h1>Select a Movie</h1>
        <select value={selectedOption} onChange={this.handleChange}>
          <option value=''> </option>
          {movies.map((movie) => {
            return (
              <option key={movie.id} value={movie.title}>
                {movie.title}
              </option>
            );
          })}
        </select>
        <div>
          {selected ? (
            <div className='movies-container'>
              <h2> {selected.title}</h2>
              <img
                className='movieImg'
                src={selected.image}
                alt={selected.title}
              />

              <p>
                <strong>Director: </strong> <span>{selected.director}</span>
              </p>

              <p>
                <strong>Producer: </strong>
                <span> {selected.producer}</span>
              </p>
              <p>
                <strong>Release Date: </strong>
                <span>{selected.release_date}</span>
              </p>
              <p>
                <strong>Rottentomato Score: </strong>
                <span>{selected.rt_score}</span>
              </p>
              <p>
                <strong>Description: </strong>
              </p>
              <p>{selected.description}</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Movies;
