import { Component } from "react";

class Location extends Component{
    constructor(){
        super();
        this.state= {
            location: [],
            setlocation: ''
        }
    
    }
    handleFetctLocations = () =>{
        fetch("https://ghibliapi.herokuapp.com/locations")
        .then((res)=> res.json())
        .then((data) => {
            
            this.setState({
                locations: data,
                
            }) 
        });
    };
 handlelocation=()=>{
    this.setState({
        setlocation:!this.state.setlocation
    })
 }       

 render (){
    let myLocation = this.state.location.map((location)=>{
        return <div>
                <li>{location.name}</li>
                <li>{location.climate}</li>
                <li>{location.terrain}</li>
            </div>       
    })
    
    return (
        <div className="locations">
            <h1>List of Locations</h1>
            <button onClick={this.handlelocation}>
                 {this.state.setlocation ? "Hide" : "Show"}Locations</button>
                 {this.state.setlocation &&
                  <ul>
                    {myLocation}
                    </ul>
                    }
        </div>
    )
 }
}
