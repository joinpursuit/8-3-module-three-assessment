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
      <main className='main'>
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
          <Link to='/People'>
            <h2 className='People'>People</h2>
          </Link>
          <Link to='/Locations'>
            <h2 className='Locations'>Locations</h2>
          </Link>
        </div>
      </main>
    );
  }
}
export default Nav;
