import React, { Component } from "react";
import Home from "./Home";
import Movies from "./Movies";
import People from "./People";
import Locations from "./Locations";
import { Routes, Route } from "react-router-dom";

export default class Main extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
    );
  }
}
