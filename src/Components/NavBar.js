import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav>
      <article>
        <h1>
          <Link to="/">
            <img className='mononokepic' src="https://miro.medium.com/max/1023/1*yBCgIO7Az4yfvFqQRplG1A.png" alt="Princess-Mononoke"/>
          </Link>
        </h1>
      </article>
        <ul>
          <li>
              <Link to="/movies">Movies</Link>
          </li>
          <li>
              <Link to="/people">People</Link>
          </li>
          <li>
              <Link to="/locations">Locations</Link>
          </li>
        </ul>
    </nav>
  );
};

export default NavBar