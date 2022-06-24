import React from "react";

export default function GetMovieInfo({ movies, movieTitle }) {
  return (
    <div>
      {movies.map((movie) => {
        if (movieTitle !== "" && movie.title.includes(movieTitle)) {
          return <p key={movie.id}>{movie.description}</p>;
        }
      })}
    </div>
  );
}
