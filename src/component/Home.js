import React from 'react';
import "./home.css"

class Home extends React.Component {
  render() {
    return (
        <div className='home'>
        <h1>Welcome to GhibliApp</h1>
        <img src='https://media3.giphy.com/media/liUhPmZdArpYc/giphy.gif' alt='ghibly gif'/>
        </div>
    )
  }
}

export default Home;
