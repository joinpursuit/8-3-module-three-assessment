import React from 'react';
import "./home.css"

class Home extends React.Component {
  render() {
    return (
        <div className='home'>
        <h1>Welcome to GhibliApp</h1>
        <img src='https://images.gr-assets.com/hostedimages/1489104577ra/22185966.gif' alt='ghibly gif'/>
        </div>
    )
  }
}

export default Home;
