import  { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";

 class Navbar extends Component{
  
    render(){
        return(
            
              <nav>
                Navbar
                <Link to="/">
                  {/* <img
                  className="studioGhibli-logo"
                  src='https://www.pngfind.com/pngs/m/366-3661780_a-scribbly-on-ghibli-studio-ghibli-logo-png.png'
                  alt="Studio Ghibli logo"
                  /> */}
                </Link>
                {/* <Link to="/movie">Movie</Link>
                <Link to="/people">People</Link>
                <Link to="/location">Location</Link> */}
              </nav>
            
            
        )
    }
}
export default Navbar;