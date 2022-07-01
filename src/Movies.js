import React from 'react';
import './Movies.css';
function errorHandler(error) {
  console.log(error);
  return error;
}
const MoviesMenu = (props) => (
  <section>
    <h1>{props.title}</h1>
    <select name='{props.title}' onChange={props.onChange}>
      <option defaultValue> Select {props.title}</option>
      {props.options.map((movie, index) => (
        <option key={index} value={movie.id}>
          {movie.title}
        </option>
      ))}
    </select>
  </section>
);

let BASE_URL = 'https://ghibliapi.herokuapp.com';
let PATH = '/films';
let API_FORMAT = '?format=j1';
class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      ghibliData: [],
      values: '',
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}${PATH}${API_FORMAT}`)
      .then((response) => response.json())
      .then((result) => this.setState({ ghibliData: result }))
      .catch(errorHandler);
  }
  onChange = (event) => {
    this.setState({ values: event.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div id='MovieDiv' className='movies'>
        <h1>Select A Movie</h1>
        <MoviesMenu
          name={this.state.title}
          options={this.state.ghibliData}
          onChange={this.onChange}
        ></MoviesMenu>
      </div>
    );
  }
}
export default Movies;
