import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Component/Home';
import Movie from './Component/Movie';
import Navbar from './Component/Navbar';
import People from "./Component/People";
import Locations from "./Component/Locations";


function App() {
  return (
    <div className="app">
      <Router>
        
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movie">Movie</Link></li>
            <li><Link to="/people">People</Link></li>
            <li><Link to="/location">Location</Link></li>
          </ul>

   
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/movie' component={Movie}/>
        <Route path='/people' component={People}/>
        <Route path='/locations' component={Locations}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;