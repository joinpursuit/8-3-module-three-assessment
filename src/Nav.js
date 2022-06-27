import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav className='main'>
        <div className='navigate'>
          <Link to='/'>
            <img
              className='logo'
              src='./logos/GhibLogo.png'
              alt='Logo w/ Totoro'
              width={50}
              height={50}
            />
          </Link>
          <Link to='/Movies'>
            <h2 className='Movies'>Movies</h2>
          </Link>
          <Link to='/SearchBar'>
            <h2 className='People'>People</h2>
          </Link>
          <Link to='/Location'>
            <h2 className='Location'>Location</h2>
          </Link>
        </div>
      </nav>
    );
  }
}
export default Nav;
