import React from "react";
import MovieDetail from "./MovieDetail";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: "",
      movies: [],
    };
  }

  onSelectHandler = (event) => {
    this.setState({ selectedMovie: event.target.value });
  };

  componentDidMount() {
    const URL = "https://ghibliapi.herokuapp.com/films";

    fetch(URL)
      .then((result) => result.json())
      .then((data) => {
        this.setState({ movies: data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { selectedMovie, movies } = this.state;
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
