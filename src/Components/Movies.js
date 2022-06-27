import React from "react";
import MovieDetail from "./MovieDetail";
import "./Movies.css";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: "", //the movie user selected from dropdown menu
      movies: [], //array of ghibli movies data
    };
  }

  //update selectedMovie in the state
  onSelectHandler = (event) => {
    this.setState({ selectedMovie: event.target.value });
  };

  //load the movies data after page was load
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

    //add the placeholder, empty option
    movieList.unshift(<option key={-1} value=""></option>);

    return (
      <div className="movies">
        <h2>Select a Movie</h2>
        <select onChange={this.onSelectHandler}>{movieList}</select>

        {/* if user selected a movie, not empty option, then display the movie detail */}
        {selectedMovie !== "" ? (
          <MovieDetail selectedMovie={selectedMovie} movies={movies} />
        ) : null}
      </div>
    );
  }
}

export default Movies;
