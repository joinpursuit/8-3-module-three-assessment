import React from "react";

export default function GetMovieInfo({ movies, movieTitle }) {
  return (
    <div className="movieinfo">
      {movies.map((movie) => {
        if (movieTitle !== "" && movie.title.includes(movieTitle)) {
          return (
            <div key={movie.id}>
              <h4>
                Summary: <span>{movie.description}</span>
              </h4>
              <h4> Directed by: {movie.director}</h4>
              <h4> Producer: {movie.producer}</h4>
            </div>
          );
        }
      })}
    </div>
  );
}
