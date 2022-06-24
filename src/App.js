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
  }
  render() {
    return (
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
    );
  }
}

export default App;
