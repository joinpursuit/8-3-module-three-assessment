import React, { Component } from 'react';
import "./movies.css"
export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      titleSelected: '',
    };
  }
  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films/')
      .then((response) => response.json())
      .then((res) => this.setState({ movies: res }));
  }
  onChange = (event) => {
    this.setState({ titleSelected: event.target.value });
  };

  render() {
    let { movies, titleSelected } = this.state;

    const movieTitle = movies.map((movie) => {
      return <option key={movie.id}>{movie.title}</option>;
    });

    let selected = movies.find((movie) => movie.title === titleSelected);

    return (
      <div className='movies'>
        <h1 className='title-page'>Select a movie</h1>

        <select onChange={this.onChange}>
          <option></option>
          {movieTitle}
        </select>
        <div className='movies'>
          {selected ? (
            <div>
              <h2>{selected.title}</h2>
              <img className='title-image' src={selected.image}></img>
              <h3>
               Release Date: {selected.release_date}
              </h3>
              <p>
                <strong>Description:</strong> {selected.description}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
