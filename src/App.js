import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";

class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <div>
        <Nav />
        <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/Movies" component={Movies} />
        <Route path="/People" component={People} />
        <Route path="/Locations" component={Locations} />
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
