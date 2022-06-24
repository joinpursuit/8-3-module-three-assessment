function MovieDetail(props) {
  const { movies, selectedMovie } = props;
  const displayMovieDetail = movies.find((movie) => {
    return movie.title === selectedMovie;
  });

  return (
    <section>
      <h3>Title: {displayMovieDetail.title}</h3>
      <h5>Release Date: {displayMovieDetail.release_date}</h5>
      <p>Description: {displayMovieDetail.description}</p>
    </section>
  );
}

export default MovieDetail;
