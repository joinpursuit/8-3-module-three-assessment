import React from "react";

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
          <h2>Title: {foundMovie.title}</h2>
          <p>Release Date: {foundMovie.release_date}</p>
          <p>Description: {foundMovie.description}</p>
        </div>
      );
    };

    return (
      <div className="movies">
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

        <div>
          {this.state.value ? printMovieInfo() : "Please select a movie"}
        </div>
      </div>
    );
  }
}

export default Movies;
