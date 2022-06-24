import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        {" "}
        <img
          src="https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21172945/Ghostbusters.png"
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
