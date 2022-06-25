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
        <div>
          <p>Title: {foundMovie.title}</p>
          <p>Release Date: {foundMovie.release_date}</p>
          <p>Description: {foundMovie.description}</p>
        </div>
      );
    };

    return (
      <div className="movies menu dropdown">
        <form>
          <label>
            <div className="title">Select a Movie</div>
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

        <div>{this.state.value ? printMovieInfo() : null}</div>
      </div>
    );
  }
}

export default Movies;
