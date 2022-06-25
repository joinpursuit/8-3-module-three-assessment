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
						src="https://upload.wikimedia.org/wikipedia/sco/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png"
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
