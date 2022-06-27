import React from "react";
import "./Movies.css";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
    };
  }

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  render() {
    const printMovieInfo = () => {
      const foundMovie = this.props.movieArray.find((movie) => {
        return movie.title === this.state.value;
      });
      return (
        <div className="movie-data">
          <p>
            <h3>
              Title:
              <span className="title-data"> {foundMovie.title}</span>
            </h3>
          </p>
          <p>
            <strong>Release Date:</strong> {foundMovie.release_date}
          </p>
          <p>
            <strong>Description: </strong> {foundMovie.description}
          </p>
        </div>
      );
    };

    return (
      <div className="movies menu ">
        <form>
          <label>
            <h2>Select a Movie</h2>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value={null}></option>
              {this.props.movieArray.map((movie, idx) => {
                return (
                  <option key={idx} value={movie.title}>
                    {movie.title}
                  </option>
                );
              })}
            </select>
          </label>
        </form>

        <div className="data-wrapper">
          {this.state.value ? printMovieInfo() : "Please select a movie"}
        </div>
      </div>
    );
  }
}
export default Movies;
