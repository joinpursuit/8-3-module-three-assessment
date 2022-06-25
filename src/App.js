import './App.css';
import { Component } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Movies from './Components/Movies';
import People from './Components/People';
import Locations from './Components/Locations';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      people: [],
      locations: [],
    };
  }
  // https://stackoverflow.com/questions/52882903/componentdidmount-multiple-fetch-calls-best-practice
  componentDidMount() {
    Promise.all([
      fetch('https://ghibliapi.herokuapp.com/films'),
      fetch('https://ghibliapi.herokuapp.com/people'),
      fetch('https://ghibliapi.herokuapp.com/locations'),
    ])

      .then(([res1, res2, res3]) => {
        return Promise.all([res1.json(), res2.json(), res3.json()]);
      })
      .then(([movies, people, locations]) => {
        this.setState({
          movies: [...movies],
          people: [...people],
          locations: [...locations],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movies"
            element={<Movies allMovies={this.state.movies} />}
          />
          <Route path="/people" element={<People allPeople={this.state.people}/>} />
          <Route path="/locations" element={<Locations />}/>
        </Routes>
      </div>
    );
  }
}

export default App;
