import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <img
            className="ghibslogo"
            src="https://wallpaperaccess.com/full/6246790.jpg"
            alt="ghibli-pic"
          />
        </Link>
        <Link to="/movies"><strong>Movies</strong></Link>
        <Link to="/people"><strong>People</strong></Link>
        <Link to="/locations"><strong>Locations</strong></Link>
      </nav>
    );
  }
}

export default Navbar;