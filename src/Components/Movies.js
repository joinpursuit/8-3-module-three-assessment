import "./Styles/Movies.css"
import React, {Component} from "react";

class Movies extends Component {
	constructor() {
		super();
		this.state = {
			allMoobies: [],
			currentTitle: "",
		};
	}
	fetchLocation = () => {
		fetch("https://ghibliapi.herokuapp.com/films")
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					allMoobies: data,
				});
			});
	};
	componentDidMount = () => {
		this.fetchLocation();
	};
	handleDropdownChange = (evt) => {
		this.setState({
			currentTitle: evt.target.value,
			display: true,
		});
	};
	render() {
		let mapping = this.state.allMoobies.map((each) => {
			return <option key={each.title}>{each.title}</option>;
		});
		let selecty = this.state.allMoobies.find((each) => {
			return each.title === this.state.currentTitle;
		});

		return (
			<div className="center">
				<h1 className="prompt-text">Select a Movie </h1>
				<select
					value={this.state.currentTitle}
					onChange={this.handleDropdownChange}
				>
					<option></option>
					{mapping}
				</select>
				<div className="movies">
					{this.state.currentTitle && (
						<div className="moobie">
							<h1>Title: {selecty?.title}</h1>
							<p>Release Date: {selecty?.release_date}</p>
							<p>Description: {selecty?.description}</p>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Movies