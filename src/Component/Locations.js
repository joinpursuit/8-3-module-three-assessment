import { Component } from "react";
import React from "react";

class Locations extends Component{
    constructor(){
        super();
        this.state= {
            location: [],
            place: false,
        }
    
    }
//     handleFetctLocations = () =>{
//         fetch("https://ghibliapi.herokuapp.com/locations")
//         .then((res)=> res.json())
//         .then((data) => {
            
//             this.setState({
//                 locations: data,
                
//             }) 
//         });
//     };
//  handlelocation=()=>{
//     this.setState({
//         place:!this.state.place
//     })
//  }       

 render (){
    // let myLocation = this.state.location.map((location)=>{
    //     return <div>
    //             <li>{location.name}</li>
    //             <li>{location.climate}</li>
    //             <li>{location.terrain}</li>
    //         </div>       
    // })
    
    return (
        <div className="locations">
            {/* <h1>List of Locations</h1>
            <button onClick={this.handlelocation}>
                 {this.state.place ? "Hide" : "Show"}Locations</button>
                 {this.state.place &&
                  <ul>
                    {myLocation}
                    </ul>
                    } */}
                    Location
        </div>
    )
 }
}

export default Locations