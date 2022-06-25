import { Link } from 'react-router-dom';
import './Nav.css'

const nav = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img className="logo" src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F24.media.tumblr.com%2F38ea5564a32521686354b10e16da0b2e%2Ftumblr_mfnrqiSKmU1rwgj3ko5_500.gif&f=1&nofb=1' height="50px" width="50px" />
        </Link>
        <h3>
          <Link to="/movies">Movies</Link>{' '}
        </h3>
        <h3>
          <Link to="/people">People</Link>{' '}
        </h3>
        <h3>
          <Link to="/locations">Locations</Link>{' '}
        </h3>
      </nav>
    </div>
  );
};

export default nav;
