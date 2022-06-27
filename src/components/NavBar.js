import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import GhibliGuitar from './GhibliGuitar.webp';
import {
  HomeSharp,
  PetsRounded,
  PeopleSharp,
  LocationOnSharp,
  MovieFilterSharp,
} from '@material-ui/icons';

const NavBar = () => {
  return (
    <nav className='nav'>
      <Link to='/'>
        <img className='nav__logo' src={GhibliGuitar} alt='Ghibli-Logo' />
        <br />
        <HomeSharp className='nav__logo-home' />
      </Link>
      <Link to='/movies'>
        <MovieFilterSharp className='nav__movies' />
        <br />
        <span>Movies</span>
      </Link>
      <Link to='/people'>
        <PeopleSharp className='nav__people' />
        <br />
        <span>People</span>
      </Link>
      <Link to='/locations'>
        <LocationOnSharp className='nav__locations' />
        <br />
        <span>Locations</span>
      </Link>
      <Link to='/species'>
        <PetsRounded className='nav__species' />
        <br />
        <span className='nav__species'>Species</span>
      </Link>
    </nav>
  );
};

export default NavBar;
