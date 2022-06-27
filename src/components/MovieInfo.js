import React from "react";

const MovieInfo = (props) => {
  //
  const { movieList, movieSelected } = props;

  const filtered = movieList.filter(movie => {
    return movie.id === movieSelected;
  });

  return (
    <>
      {filtered.map((movie, index) => {
        return (
          <ul key={index}>
            <li>
              <h1>Title: {movie.title}</h1>
            </li>
            <li>
              Release date: {movie.release_date}
            </li>
            <li>
              {movie.description}  
            </li>
          </ul>
        );
      })}
    </>
  )
}

export default MovieInfo;