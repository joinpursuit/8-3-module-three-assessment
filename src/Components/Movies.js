import React from "react";
import GetMovieInfo from "./GetMovieInfo";
import "./Movies.css";

const Movies = ({ movies, movieTitle, getMovie }) => {
  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select value={movieTitle} onChange={getMovie}>
        <option value="blank" />
        {movies.map((movie) => {
          return (
            <option value={movie.title} key={movie.id}>
              {movie.title}
            </option>
          );
        })}
      </select>
      <h1>{movieTitle}</h1>
      <GetMovieInfo movies={movies} movieTitle={movieTitle} />
    </div>
  );
};

export default Movies;
