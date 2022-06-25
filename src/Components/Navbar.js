import React from "react";
import logo from "../logo.svg";
import "../Components/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <Link to="/movies" id="movies">
          Movies
        </Link>
        <Link to="/people" id="people">
          People
        </Link>
        <Link to="/locations" id="locations">
          Locations
        </Link>
      </nav>
    </div>
  );
}
