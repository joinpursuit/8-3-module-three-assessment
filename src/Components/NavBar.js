import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [color, changeColor] = useState("grey");

  document.body.style.backgroundColor = color;

  return (
    <nav className="navbar">
      <ul className="nav-center">
        <li>
          <Link to="/" onClick={() => changeColor("grey")}>
            <img
              className="logo"
              src="./logo.png"
              title='"Once you do something, you never forget. Even if you can&apos;t remember."'
              alt="GhibliApp Logo"
              width="50px"
              height="50px"
            />
          </Link>
        </li>
        <li>
          <Link to="/movies" onClick={() => changeColor("#3f6b49")}>
            Movies
          </Link>
        </li>
        <li>
          <Link to="/people" onClick={() => changeColor("#4f5d75")}>
            People
          </Link>
        </li>
        <li>
          <Link to="/locations" onClick={() => changeColor("#7261A3")}>
            Locations
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
