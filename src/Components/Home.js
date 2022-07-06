import { React, Component } from 'react';
import FilmCard from './FilmCard.js';

import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
    };
  }
  fetchAllMovies = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ allMovies: data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ allMovies: [] });
      });
  };
  componentDidMount() {
    this.fetchAllMovies();
  }
  render() {
    return (
      <section>
        <h1 style={{ textAlign: 'center', padding: '2rem 0' }}>
          Welcome to Ghibli App
        </h1>
        <div className='HomePage'>
          <div className='FilmsContainer'>
            {this.state.allMovies.map((film) => {
              return (
                <FilmCard
                  id={film.id}
                  title={film.title}
                  release={film.release_date}
                  image={film.image}
                />
              );
            })}
          </div>
          {/* <FilmDetails allMovies={this.state.allMovies} /> */}
        </div>
      </section>
    );
  }
}

export default Home;
