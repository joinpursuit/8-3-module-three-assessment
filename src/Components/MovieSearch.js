import "./Styles/MovieSearch.css"
import React, {Component} from "react";

class MovieSearch extends Component{
	constructor(){
		super();
		this.state = {
			films: "",
		};
	}

componentDidMount() {
		let film = [];
		fetch(`curl https://ghibliapi.herokuapp.com/films/`)
		.then(response => {
			return response.json();
		}).then(data => {
			film = data.results.map((title) => {
				return title;
			});
			this.setState({
				films: film,
			});
		});
}

render() {
		return (
			<title state={this.state} />
		)
	}
}

export default MovieSearch;