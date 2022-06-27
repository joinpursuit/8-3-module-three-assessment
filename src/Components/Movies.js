import React, { Component } from "react";
import "../Components/Movies.css";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      listOfMovies: [],
      selectedMovie: "",
      description: "",
    };
  }

  fetchMovies = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          listOfMovies: result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  handleSelectedMovie = (event) => {
    this.setState({
      selectedMovie: event.target.value,
    });
  };

  render() {
    let { listOfMovies, selectedMovie } = this.state;
    let idCounter = 0;

    let movieTitles = listOfMovies.map((movie) => {
      return <option key={movie.id}>{movie.title}</option>;
    });

    let moviePicked = () => {
      return <p>{selectedMovie}</p>;
    };

    let movieDescription = listOfMovies.map((movie) => {
      if (movie.title === selectedMovie) {
        return (
          <div key={idCounter++}>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p key={movie.id}>
              <strong>Description:</strong> {movie.description}
            </p>
          </div>
        );
      }
    });

    return (
      <div className="movies">
        <h1>Select a movie</h1>
        <select onChange={this.handleSelectedMovie}>
          <option></option>
          {movieTitles}
        </select>
        <div className="description">
          <h2>{moviePicked()}</h2>
          <div>{movieDescription}</div>
        </div>
      </div>
    );
  }
}
