import { render } from '@testing-library/react';
import { Component } from 'react';
import './Movies.css';

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      selected: '',
    };
  }

  getMovieId = (event) => {
    this.setState({
      selected: event.target.value,
    });
  };

  render() {
    const { allMovies } = this.props;
    const { selected } = this.state;

    const movieList = allMovies.map((movie) => {
      return (
        <option key={movie.id} value={movie.id}>
          {movie.title}
        </option>
      );
    });

    const movieData = allMovies.find((movie) => movie.id === selected);

    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select onChange={this.getMovieId} className="titles">
          <option value=""></option>
          {movieList}
        </select>
        {selected && (
          <div>
            <h2>Title: {movieData.title}</h2>
            <p>Release Date: {movieData.release_date}</p>
            <p>Description: {movieData.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Movies;
