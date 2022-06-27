import "./App.css";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import People from "./components/people/People";
import Movies from "./components/movies/Movies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/people" element={<People />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
