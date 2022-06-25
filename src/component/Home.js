import React from 'react';
import './home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome to GhibliApp</h1>
        <img
          src="https://media3.giphy.com/media/nthoYgQ91Up2u7qmcE/200.webp?cid=ecf05e47auili7jgvu09gb08q3k42dy4lg7f0x3gs6ahhcgm&rid=200.webp&ct=g"
          alt="ghibly gif"
        />
      </div>
    );
  }
}

export default Home;
