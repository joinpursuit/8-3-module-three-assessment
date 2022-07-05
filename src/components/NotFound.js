import React from 'react';
import { Link } from 'react-router-dom';

// import "../styles/NotFound.css"

function NotFound () {

  return (
    <section className='container'>
      <div className='not__found'>
        <h1>Not found</h1>
        <Link to="/">
          Go to home 
        </Link>
      </div>
    </section>
  )
}

export default NotFound;