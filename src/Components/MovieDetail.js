import "./MovieDetail.css";

function MovieDetail(props) {
  const { movies, selectedMovie } = props;

  //find the user selected movie
  const displayMovieDetail = movies.find((movie) => {
    return movie.title === selectedMovie;
  });

  //display the movie details
  return (
    <div className="movieDetail">
      <h3>
        <span className="bold">Title:</span> {displayMovieDetail.title}
      </h3>
      <h5>
        <span className="bold">Release Date:</span>{" "}
        {displayMovieDetail.release_date}
      </h5>
      <p>
        <span className="bold">Description:</span>{" "}
        {displayMovieDetail.description}
      </p>
    </div>
  );
}

export default MovieDetail;
