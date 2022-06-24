import "./Styles/Locations.css"
import React, {Component} from "react";

class Locations extends Component {
    constructor(){
        super();
        this.state = {
            fetchdata: [],
            toggle: false,
        }
    }

    searchy = (evt) => {
        this.setState({searchyValue: e.target.value,});
    };
    
    componentDidMount() {
		fetch("https://ghibliapi.herokuapp.com/locations")
			.then((res) =>  res.json())
			.then((data) => {
				data.forEach((location) => {
					this.setState({
						fetchdata: [
						...this.state.fetchdata,
						<li key={location.name}>
							<p>Name: {location.name}</p>
							<p>Climate: {location.climate}</p>
							<p>Terrain: {location.terrain}</p>
						</li>,
						],
					});
				})
				
			});
	};

	hide = () => {
		this.setState({toggle: !this.state.toggle})
	}

    render(){
        return (
            <div className="bg">
                <div className="center">
                    <h1 className="list">List of Locations</h1>
                    <button onClick={this.hide} className="loc-btn" id="loc-btn">
                    {this.state.toggle ? "Hide Locations" : "Show Locations"}
                    </button>
                    {this.state.toggle ? <ul>{this.state.fetchdata}</ul>: ""}
                </div>
            </div>
        )
    }
}

export default Locations