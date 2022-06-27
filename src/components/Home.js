import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import Movies from './Movies';

const FILMS_URL = 'https://ghibliapi.herokuapp.com/films';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      movieTitles: [],
    };
  }

  componentDidMount = () => {
    axios.get(FILMS_URL).then((results) => {
      this.setState({
        movieTitles: results.data,
      });
    });
  };

  render() {
    let { movieTitles } = this.state;
    let moviePosters = movieTitles.map((movie) => {
      return (
        <Link to='/movies' elements={<Movies />}>
          <li className='poster'>
            <div className='home__posters'>
              <img
                src={movie.image}
                alt='movie-poster'
                style={{ width: '400px', height: 'auto' }}
              />
              <br />
              <img
                className='movie-banner'
                src={movie.movie_banner}
                alt='movie-banner'
                style={{ width: '400px', height: 'auto' }}
              />
            </div>
          </li>
        </Link>
      );
    });

    return (
      <div className='home'>
        <h1> Welcome to GhibliApp</h1>
        <ul>{moviePosters}</ul>
      </div>
    );
  }
}

export default Home;
