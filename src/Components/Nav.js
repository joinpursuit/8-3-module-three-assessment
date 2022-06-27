import "./Styles/Nav.css"
import React, {Component} from "react";
import logo from "../Images/logo.png";
import {Link} from "react-router-dom";

class Nav extends Component{
    render(){
        return(
            <nav>
            <div id="logo-container">
                <Link className="logo" to="/">
                    <img src={logo} alt="logo" className="ghibli-logo" />
                </Link>
                </div>
                <div id="leMovies">
					<Link to="/Movies">Movies</Link>
					<div id="lePeople">
					<Link to="/People">People</Link>
					</div>
					<div id="leLocations">
					<Link to="/Locations">Locations</Link>
					</div>
            </div>
            </nav>
        )
    }
}

export default Nav