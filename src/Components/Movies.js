import React from "react";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { movies } = this.props;
    console.log(this.props);
    const movieList = movies.map((movie) => {
      return <option value={movie.title}>{movie.title}</option>;
    });
    return (
      <section className="movies">
        <h2>Select a Movie</h2>
        <select>{movieList}</select>
      </section>
    );
  }
}

export default Movies;
