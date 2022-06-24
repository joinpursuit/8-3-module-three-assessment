import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import image from './image/studioghibli.jpeg';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul className='navbar'>
          <li className='nav-links'>
            <Link to='/'>
              <img
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  outline: 'none',
                  border: 'none',
                }}
                alt=''
              />
            </Link>
          </li>
          <li className='nav-links'>
            <Link to='/movies'>Movies</Link>
          </li>
          <li className='nav-links'>
            <Link to='/people'>People</Link>
          </li>
          <li className='nav-links'>
            <Link to='/locations'>Locations</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
