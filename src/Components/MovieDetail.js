function MovieDetail(props) {
  const { movies, selectedMovie } = props;
  const displayMovieDetail = movies.find((movie) => {
    return movie.title === selectedMovie;
  });

  return (
    <div>
      <h3>Title: {displayMovieDetail.title}</h3>
      <h5>Release Date: {displayMovieDetail.release_date}</h5>
      <p>Description: {displayMovieDetail.description}</p>
    </div>
  );
}

export default MovieDetail;
