import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			currentPage: "home",
		};
	}
	changePage = (page) => {
		this.setState({
			currentPage: page,
		});
	};
	render() {
		return (
			<nav>
				<Link to="/" onClick={() => this.changePage("home")}>
					<img
						src="https://i.pinimg.com/736x/03/51/71/0351711fe834c3a96656f65b4c54b2b2--studio-ghilbi-ghibli-movies.jpg"
						alt="logo"
					/>
				</Link>
				<Link
					className={this.state.currentPage === "movies" ? `selected` : null}
					to="/movies"
					onClick={() => this.changePage("movies")}
				>
					Movies
				</Link>
				<Link
					className={this.state.currentPage === "people" ? `selected` : null}
					to="/people"
					onClick={() => this.changePage("people")}
				>
					People
				</Link>
				<Link
					className={this.state.currentPage === "locations" ? `selected` : null}
					to="/locations"
					onClick={() => this.changePage("locations")}
				>
					Locations
				</Link>
			</nav>
		);
	}
}
