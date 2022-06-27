import React from "react";

import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
  
    render(){
        return(
            <div className="nav">
              <nav>
                <Link to="/"><img src="https://st.depositphotos.com/3332767/4586/i/950/depositphotos_45867409-stock-photo-box-of-popcorn.jpg" /></Link>
                <Link to="/movie">Movie</Link>
                <Link to="/people">People</Link>
                <Link to="/location">Location</Link>
              </nav>
            </div>
            
        )
    }
}
export default Navbar;