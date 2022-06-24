import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Movies from "./Components/Movies";
import People from "./Components/People";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieTitle: "",
    };
  }

  fetchMovies = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ movies: json });
      })
      .catch(() => {});
  };

  componentDidMount() {
    this.fetchMovies();
  }

  getSelectedMovie = (event) => {
    this.setState({ movieTitle: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <Nav />
          </nav>

          <Routes>
            {/* COMPONENTS */}
            <Route path="/" element={<Home />} />
            <Route
              path="/movies"
              element={
                <Movies
                  movies={this.state.movies}
                  movieTitle={this.state.movieTitle}
                  getMovie={this.getSelectedMovie}
                />
              }
            />
            <Route path="/people" element={<People />} />
            <Route path="/locations" element={<People />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
