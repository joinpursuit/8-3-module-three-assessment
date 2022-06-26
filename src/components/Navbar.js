import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/ghibli.png"

function Navbar () {

  return (
    <>
      <nav>
        <Link className="logo" to="/">
          <img src={logo} />
        </Link>
        <Link className="menu__item" to="/movies">
          Movies 
        </Link>
        <Link className="menu__item" to="/people">
          People 
        </Link>
        <Link className="menu__item" to="/locations">
          Locations 
        </Link>
      </nav>
    </>
  )
}

export default Navbar;