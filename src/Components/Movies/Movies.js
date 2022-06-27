import { Component } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import "./Movies.scss";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      movieSelected: "",
      title: "",
      releaseDate: "",
      description: "",
      errors: null,
    };
  }

  componentDidMount = () => {
    axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then((res) => {
        this.renderMovies(res.data);
      })
      .catch((err) => {
        this.errors();
      });
  };

  renderMovies = (movies) => {
    const movieListCopy = movies.map((movie) => {
      return (
        <option
          key={movie.id}
          value={movie.title}
          onClick={() => {
            this.handleSelectedMovie(movie);
          }}
        >
          {movie.title}
        </option>
      );
    });

    this.setState({
      movieList: movieListCopy,
    });
  };

  handleChange = (e) => {
    this.setState({ movieSelected: e.target.value });
  };

  handleSelectedMovie = (movie) => {
    this.setState({
      title: movie.title,
      releaseDate: movie.release_date,
      description: movie.description,
    });
  };

  errors = () => {
    this.setState({ errors: "ERROR: something went wrong" });
  };

  render() {
    const {
      movieSelected,
      movieList,
      title,
      releaseDate,
      description,
      errors,
    } = this.state;

    return (
      <section className="movies">
        <h1>Select a Movie</h1>
        <Form onChange={this.handleChange}>
          <Form.Select className="formSelect">
            <option value=""></option>
            {movieList}
          </Form.Select>
        </Form>
        {movieSelected ? (
          <section className="movieDetails">
            <h2>Title: {title}</h2>
            <p>
              <strong>Release Date:</strong> {releaseDate}
            </p>
            <p>
              <strong>Description:</strong>
              {description}
            </p>
          </section>
        ) : null}
        {errors && <h3>{errors}</h3>}
      </section>
    );
  }
}

export default Movies;
