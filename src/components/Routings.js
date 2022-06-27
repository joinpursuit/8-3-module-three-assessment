import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Movies from './Movies';
import People from './People';
import Locations from './Locations';
import Home from './Home';
import Species from './Species';
import ErrorPage from './ErrorPage';

const Routings = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/people' element={<People />} />
      <Route path='/locations' element={<Locations />} />
      <Route path='/species' element={<Species />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default Routings;
