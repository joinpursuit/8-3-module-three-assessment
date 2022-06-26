import React from "react";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      chosenMovie: "",
    };
  }

  handleChosenMovie = (event) => {
    let chosenMovieTitle = event.target.value;

    const foundMovie = this.state.movies.find((movie) => {
      return movie.title === chosenMovieTitle;
    });
    this.setState({ chosenMovie: foundMovie });
  };

  componentDidMount() {
    let baseURL = "https://ghibliapi.herokuapp.com/films";
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data }));

    //title,movie,desc
  }

  render() {
    return (
      <div className="movies">
        <h3>Select a Movie</h3>
        <select onChange={this.handleChosenMovie}>
          <option>{""}</option>
          {this.state.movies.map((movie) => {
            return <option key={movie.id}>{movie.title}</option>;
          })}
        </select>
        {this.state.chosenMovie ? (
          <section>
            <h4>{this.state.chosenMovie.title}</h4>
            <h5>{this.state.chosenMovie.release_date}</h5>
            <p>{this.state.chosenMovie.description}</p>
          </section>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Movies;
