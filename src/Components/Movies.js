import React, { Component } from "react";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      listOfMovies: [],
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

  render() {
    let { listOfMovies } = this.state;

    let movieTitles = listOfMovies.map((movie) => {
      return <option key={movie.id}>{movie.title}</option>;
    });

    return (
      <div className="movies">
        <h1>Select a movie</h1>
        <select>{movieTitles}</select>
      </div>
    );
  }
}
