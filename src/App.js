import React from "react";
import "./App.css";
import Locations from "./Components/Locations";
import Movies from "./Components/Movies";
import Nav from "./Components/Nav";
import People from "./Components/People";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { movieArray: [], peopleArray: [], locationsArray: [] };
  }

  componentDidMount() {
    Promise.all([
      fetch("https://ghibliapi.herokuapp.com/films"),
      fetch("https://ghibliapi.herokuapp.com/people"),
      fetch("https://ghibliapi.herokuapp.com/locations"),
    ])
      .then(([res1, res2, res3]) => {
        return Promise.all([res1.json(), res2.json(), res3.json()]);
      })
      .then(([data1, data2, data3]) => {
        this.setState({
          movieArray: data1,
          peopleArray: data2,
          locationsArray: data3,
        });
      });
  }

  render() {
    console.log(this.state.locationsArray);
    return (
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route
            path="/movies"
            element={<Movies movieArray={this.state.movieArray} />}
          />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
    );
  }
}

export default App;
