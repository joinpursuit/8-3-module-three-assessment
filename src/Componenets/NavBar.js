import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <div className="nav">
        <Link to="/">
          <img
            className="logo-img"
            src="https://media0.giphy.com/media/13cqvMx0yH3eko/giphy.gif"
            alt=""
          />
        </Link>
        <Link to="/Movies">
          <div className="nav-element">Movies</div>
        </Link>
        <Link to="/People">
          <div className="nav-element">People</div>
        </Link>
        <Link to="/Locations">
          <div className="nav-element">Locations</div>
        </Link>
        <div className="nav-element"></div>
      </div>
    </header>
  );
}

export default NavBar;
