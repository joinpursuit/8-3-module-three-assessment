import React, { Component } from "react";
import "./People.css";
export default class People extends Component {
	constructor() {
		super();
		this.state = {
			search: "",
			found: "",
			listOfPeople: [],
		};
	}
	componentDidMount() {
		const { BASE_URL } = this.props;
		fetch(`${BASE_URL}/people`)
			.then((response) => response.json())
			.then((people) => {
				this.setState({ listOfPeople: [...people] });
			});
	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			found: this.state.listOfPeople.find((person) => {
				return person.name.toLowerCase() === this.state.search.toLowerCase();
			}),
		});
		//either a found obj of person, or undefined
		this.setState({
			search: "",
		});
	};
	handleChange = (event) => {
		const { value } = event.target;
		this.setState({ search: value });
	};
	render() {
		return (
			<div className="people">
				<h2>Search for a Person</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="search"
						value={this.state.search}
						onChange={this.handleChange}
					/>
					<button>Search</button>
				</form>
				<div>
					{this.state.found === undefined && `Not Found`}
					<p>{this.state.found && `Name: ${this.state.found.name}`}</p>
					<p>{this.state.found && `Age: ${this.state.found.age}`}</p>
					<p>{this.state.found && `Gender: ${this.state.found.gender}`}</p>
				</div>
			</div>
		);
	}
}
