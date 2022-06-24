import { render } from '@testing-library/react';
import { Component } from 'react';
import './Movies.css';

class Movies extends Component {
  constructor(props) {
    super(props);
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
    const movieList = this.props.allMovies.map((movie) => {
      return <option value={movie.id}>{movie.title}</option>;
    });

    const movieData = this.props.allMovies.find(
      (movie) => movie.id === this.state.selected
    );

    return (
      <div>
        <h1>Select a Movie</h1>
        <select onChange={this.getMovieId} className="titles">
          <option value=""></option>
          {movieList}
        </select>
        {this.state.selected && (
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
