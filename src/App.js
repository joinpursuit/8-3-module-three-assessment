import "./App.css";
import React from "react";
import Nav from "./Components/Nav";
import HomePage from "./Components/HomePage";
import Movies from "./Components/Movies";
import People from "./Components/Pepople";
import Locations from "./Components/Locations";
import { Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const URL = "https://ghibliapi.herokuapp.com/films";

    fetch(URL)
      .then((result) => result.json())
      .then((data) => {
        this.setState({ movies: data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies movies={movies} />} />
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
    );
  }
}

export default App;
