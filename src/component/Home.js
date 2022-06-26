import React from 'react';
import './home.css';

/**
 * populate the home page with movie images and banners from the API
 */
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      movieTitles: [],
    };
  }

  componentDidMount = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((result) => result.json())
      .then((data) => {
        this.setState({
          movieTitles: data,
        });
      });
  };

  render() {
    let { movieTitles } = this.state;
    let moviePics = movieTitles.map((movie) => {
      return (
        <li className="movie-card">
          <div>
            <img src={movie.image} alt="thumbnail" />
            <img src={movie.movie_banner} alt="banner" />
          </div>
        </li>
      );
    });

    return (
      <div className="home">
        <h1>Welcome to GhibliApp</h1>
        <ul className="moviePics">{moviePics}</ul>
      </div>
    );
  }
}

export default Home;
