import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <img
            className="ghibslogo"
            src="https://img.jakpost.net/c/2017/04/06/2017_04_06_24707_1491467064._large.jpg"
            alt="ghibli-pic"
          />
        </Link>
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
        <Link to="/locations">Locations</Link>
      </nav>
    );
  }
}

export default Navbar;
