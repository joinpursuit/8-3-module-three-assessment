import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="Nav">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/800px-Studio_Ghibli_logo.svg.png"
          alt="logo"
        />
      </Link>

      <Link to="/movies">
        <h1>Movies</h1>
      </Link>

      <Link to="/people">
        <h1>People</h1>
      </Link>

      <Link to="/locations">
        <h1>Locations</h1>
      </Link>
    </nav>
  );
};

export default Nav;
