import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Logo from "../Images/Totoroghibil.jpeg";

class NavBar extends React.Component {
    render() { 
        return ( 
            <nav className="navBar">
                <Link to="/"> 
                    <img src={Logo} alt="Totoro Logo" className="Link" /> 
                </Link>
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
                <Link to="/locations">Locations</Link>
            </nav>
        );
    }
}

export default NavBar;