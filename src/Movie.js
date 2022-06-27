import React, { isValidElement } from "react";
import Css from "./Movie.css";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: "",
    };
  }

  GetMovies = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((result) => result.json())
      .then((data) => {
        this.setState({
          movies: data,
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount = () => {
    this.GetMovies();
  };

  selectHandler = (event) => {
    this.setState({
      selectedMovie: event.target.value,
    });
  };

  render() {
    let { movies, selectedMovie } = this.state;

    let moviesList = movies.map((movie) => {
      return <option key={movie.id}>{movie.title}</option>;
    });

    let selected = movies.find((movie) => movie.title === selectedMovie);

    return (
      <body id="movies-section">
        <div className="movies">
          <h1>Select a movie</h1>
          <select onChange={this.selectHandler}>
            <option>Select</option>
            {moviesList}
          </select>
          <div>
            {selected ? (
              <div>
                <h2>{selected.title}</h2>
                <img id="movie-img" src={selected.image} alt="moviePic" />
                <p>
                  <strong>Release Date:</strong> {selected.release_date}
                </p>
                <p>
                  <strong>Description:</strong> {selected.description}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </body>
    );
  }
}
export default Movies;
