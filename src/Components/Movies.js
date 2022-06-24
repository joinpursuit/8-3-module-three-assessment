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
    const movieList = movies.map((movie) => {
      return <option value={movie.title}>{movie.title}</option>;
    });
    movieList.unshift(<option value=""></option>);

    return (
      <section className="movies">
        <h2>Select a Movie</h2>
        <select onChange={this.onSelectHandler}>{movieList}</select>
        {selectedMovie !== "" ? (
          <MovieDetail selectedMovie={selectedMovie} movies={movies} />
        ) : null}
      </section>
    );
  }
}

export default Movies;
