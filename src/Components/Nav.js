import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={process.env.PUBLIC_URL + "/movie-icon.png"} alt="" />
      </Link>
      <Link to="/movies">
        <div>Movies</div>
      </Link>
      <Link to="/people">
        <div>People</div>
      </Link>
      <Link to="/locations">
        <div>Locations</div>
      </Link>
    </nav>
  );
};

export default Nav;
