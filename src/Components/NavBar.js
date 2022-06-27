import { Link } from "react-router-dom";
import './NavBar.css'

export const NavBar = () => {
  return (
    <nav className="navigator">
      <article>
        <h1>
          <Link to="/">
            <img
              className="mononokepic"
              src="https://miro.medium.com/max/1023/1*yBCgIO7Az4yfvFqQRplG1A.png"
              alt="Princess-Mononoke"
            />
          </Link>
        </h1>
      </article>
      <ul className="linklist">
        <li>
          <Link className="pagelink" to="/movies">Movies</Link>
        </li>
        <li>
          <Link className="pagelink" to="/people">People</Link>
        </li>
        <li>
          <Link className="pagelink" to="/locations">Locations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
