import React, { Component } from "react";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      listOfMovies: [],
      seekMovie: "",
      description: "",
    };
  }

  getMovies = () => {
    const BASE_URL = "https://ghibliapi.herokuapp.com/";
    fetch(`${BASE_URL}films`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          listOfMovies: result,
        });
      });
  };

  componentDidMount() {
    this.getMovies();
  }

  handleSelectedMovie = (event) => {
    this.setState({
      seekMovie: event.target.value,
    });
  };

  render() {
    let { listOfMovies, seekMovie } = this.state;
    let count = 0;

    const movieTitles = listOfMovies.map((movie) => {
      return <option key={movie.id}>{movie.title}</option>;
    });

    const selectedMovie = () => {
      return <p>{seekMovie}</p>;
    };

    const movieDescription = listOfMovies.map((movie) => {
      if (movie.title === seekMovie) {
        return (
          <div key={count++}>
            <p>
              <b>Release Date:</b> {movie.release_date}
            </p>
            <p key={movie.id}>
              <b>Description:</b> {movie.description}
            </p>
          </div>
        );
      }
    });

    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select onChange={this.handleSelectedMovie}>
          <option />
          {movieTitles}
        </select>
        <div className="description">
          <h2>{selectedMovie()}</h2>
          <div>{movieDescription}</div>
        </div>
      </div>
    );
  }
}
