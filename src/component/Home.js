import React from 'react';
import "./home.css"

class Home extends React.Component {
  render() {
    return (
        <div className='home'>
        <h1>Welcome to GhibliApp</h1>
        <img src='https://media0.giphy.com/media/l3ZrVw8NkxIly/200.webp?cid=ecf05e47x8mq8qldg7n3omlzpf2xdk7c0lp4k7dq93egeoll&rid=200.webp&ct=g' alt='ghibly gif'/>
        </div>
    )
  }
}

export default Home;
