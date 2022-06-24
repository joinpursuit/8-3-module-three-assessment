import './App.css';
import { Component } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Movies from './Components/Movies'
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((movies) => {
        this.setState({
          movies: [...movies]
        });
      });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies allMovies={this.state.movies}/>}/>
          <Route path="/people" />
          <Route path="/locations" />
        </Routes>
      </div>
    );
  }
}

export default App;
