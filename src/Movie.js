import React, { isValidElement } from "react";
import Css from "./Movie.css"


class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      chosenMovie: '',
    };
  }

  GetMovies = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
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
      chosenMovie: event.target.value,
    });
  };

  render() {
    let { movies, chosenMovie } = this.state;

    let movieChoices = movies.map((movie) => {
      return <option key={movie.id}>{movie.title}</option>;
    });

    let selected = movies.find((movie) => movie.title === chosenMovie);

    return (
      <body id="movies-section">
      <div className="movies">
        <h1>Select a movie</h1>
        <select onChange={this.selectHandler}>
          <option>Select</option>
           {movieChoices}
         
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
