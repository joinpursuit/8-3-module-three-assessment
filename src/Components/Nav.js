import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav className='nav'>
            <Link to='/'>
                <img
                    className='nav-logo'
                    src='https://c.tenor.com/d-7P3FOYnqAAAAAC/tina-dancing.gif'
                    alt=''
                ></img>
            </Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/people'>People</Link>
            <Link to='/locations'>Locations</Link>
        </nav>
    );
};

export default Nav