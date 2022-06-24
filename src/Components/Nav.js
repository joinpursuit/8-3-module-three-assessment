import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <img
          className="icon"
          src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/movies.png"
          alt=""
        />
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
    </div>
  );
};

export default Nav;
