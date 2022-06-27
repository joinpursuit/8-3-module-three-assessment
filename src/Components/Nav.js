import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      {/* https://stackoverflow.com/questions/34582405/react-wont-load-local-images */}
      <Link to="/">
        <img className="logo2" src={require("./images/logo2.png")} alt="logo" />
      </Link>
      <Link to="movies">
        <div className="navigation">Movies</div>
      </Link>
      <Link to="people">
        <div className="navigation">People</div>
      </Link>
      <Link to="locations">
        <div className="navigation">Locations</div>
      </Link>
    </nav>
  );
}

export default Nav;
