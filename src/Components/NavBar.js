import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
	render() {
		return (
			<nav>
				<div>
					<Link to="/">
						<img
							src="https://i.pinimg.com/736x/03/51/71/0351711fe834c3a96656f65b4c54b2b2--studio-ghilbi-ghibli-movies.jpg"
							alt="logo"
						/>
					</Link>
				</div>
				<div>
					<Link to="/movies">Movies</Link>
				</div>
				<div>
					<Link to="/people">People</Link>
				</div>
				<div>
					<Link to="/locations">Locations</Link>
				</div>
			</nav>
		);
	}
}
