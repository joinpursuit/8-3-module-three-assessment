import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() { 
        return ( 
            <nav className="NavBar">
                
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
                <Link to="/locations">Locations</Link>
            </nav>
        );
    }
}

export default NavBar;