import React from "react";
import MovieDetail from "./MovieDetail";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: "",
    };
  }

  onSelectHandler = (event) => {
    this.setState({ selectedMovie: event.target.value });
  };

  render() {
    const { selectedMovie } = this.state;
    const { movies } = this.props;
    const movieList = movies.map((movie, index) => {
      return (
        <option value={movie.title} key={index}>
          {movie.title}
        </option>
      );
    });
    movieList.unshift(<option key={-1} value=""></option>);

    return (
      <div className="movies">
        <h2>Select a Movie</h2>
        <select onChange={this.onSelectHandler}>{movieList}</select>
        {selectedMovie !== "" ? (
          <MovieDetail selectedMovie={selectedMovie} movies={movies} />
        ) : null}
      </div>
    );
  }
}

export default Movies;
