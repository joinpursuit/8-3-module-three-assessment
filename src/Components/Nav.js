import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        {" "}
        <img
          src="https://cdn-icons-png.flaticon.com/512/3939/3939867.png"
          alt="GhostBusters"
        />
      </Link>
      <Link className="link" to="./movies">
        Movies
      </Link>
      <Link className="link" to="./people">
        People
      </Link>
      <Link className="link" to="./locations">
        Locations
      </Link>
    </div>
  );
};

export default Nav;
