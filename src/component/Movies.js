import React from 'react';
import './movies.css';

/**
 *
 */
class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      chosenMovie: '',
    };
  }

  FetchMovies = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((result) => result.json())
      .then((data) => {
        this.setState({
          movies: data,
        });
      });
  };

  componentDidMount = () => {
    this.FetchMovies();
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
      <div className="movies">
        <h1>Select a movie</h1>
        <select onChange={this.selectHandler}>
          <option></option>
          {movieChoices}
        </select>
        <div>
          {selected ? (
            <div>
              <h2>{selected.title}</h2>
              <img className="moviePic" src={selected.image} alt="moviePic" />
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
    );
  }
}

export default Movies;
