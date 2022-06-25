import { Link } from "react-router-dom";
import Logo from "../../Images/GhibliLogo.jpeg";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div>
      <header>
        <nav className="navBar" sticky="top">
          <Link to="/">
            <img src={Logo} alt="Ghibli Logo" className="Link" />
          </Link>
          <Link to="/movies" className="Link">
            Movies
          </Link>
          <Link to="/people" className="Link">
            People
          </Link>
          <Link to="/locations" className="Link">
            Locations
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
