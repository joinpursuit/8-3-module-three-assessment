import { Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Home from './Component/Home';
import Movies from './Component/Movies';
import Navbar from "./Component/Navbar";
import People from "./Component/People";
import Locations from "./Component/Locations";


function App() {
  return (
    <div className="app">
      <Router>
        
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/people">People</Link></li>
            <li><Link to="/locations">Locations</Link></li>
          </ul>

   
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/movies' component={Movies}/>
        <Route path='/people' component={People}/>
        <Route path='/locations' component={Locations}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;