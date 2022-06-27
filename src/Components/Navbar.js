import React from "react";
import download from "../download.png";
import "../Components/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <Link to="/">
          <img src={download} className="App-logo" alt="logo" />
        </Link>
        <Link to="/movies" id="movies" className="movie-nav">
          Movies
        </Link>
        <Link to="/people" id="people" className="people-nav">
          People
        </Link>
        <Link to="/locations" id="locations" className="locations-nav">
          Locations
        </Link>
      </nav>
    </div>
  );
}
