import "./Styles/Locations.css"
import React, {Component} from "react";

class Locations extends Component {
    constructor(){
        super();
        this.state = {
            allLocations: [],
            toggle: false,
        }
    }

    searchy = (evt) => {
        this.setState({searchyValue: evt.target.value,});
    };

    fetchLocation = () => {
        fetch("https://ghibliapi.herokuapp.com/locations")
        .then((res) => res.json())
        .then((data)=> {
            this.setState({allLocations: data,})
        })
    }
    
    componentDidMount() {
		this.fetchLocation();
	};

	hide = () => {
		this.setState({toggle: !this.state.toggle})
	}

    render(){
        let allLoco = this.state.allLocations.map((each) => {
            return (
                <div>
                <div key={each.id}>
                    <ul className="listy">
                        <li key={each.name}><h2>Name:{each.name}</h2></li>
                            <p>Climate:{each.climate}</p>
                            <p>Terrain:{each.terrain}</p>
                    </ul>
                </div>
                </div>
            )
        })
        return (
            <div className="locations">
                <div className="center">
                    <h1 className="list">List of Locations</h1>
                    <button onClick={this.hide} className="loc-btn" id="loc-btn">
                    {this.state.toggle ? "Hide Locations" : "Show Locations"}
                    </button>
                    <button value="Name" className="loc-btn">{this.state.toggle ? "Sort By Name" : null}</button>
                    <button value="Climate" className="loc-btn">{this.state.toggle ? "Sort By Climate" : null}</button>
                    <button value="Terrain" className="loc-btn">{this.state.toggle ? "Sort By Terrain" : null}</button>
                    <ul>{this.state.toggle ? allLoco : null}</ul>
                </div>
            </div>
        )
    }
}

export default Locations