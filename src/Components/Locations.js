import React, { Component } from "react";
import "./Locations.css";
export default class Locations extends Component {
	constructor() {
		super();
		this.state = {
			show: false,
			locations: [],
			currentSort: "",
		};
	}
	showLocations = () => {
		this.setState({ show: !this.state.show });
	};
	componentDidMount() {
		const { BASE_URL } = this.props;
		fetch(`${BASE_URL}/locations`)
			.then((response) => response.json())
			.then((obj) => {
				this.setState({ locations: [...obj] });
			});
	}
	sortByName = () => {
		let temp = this.state.locations.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			} else if (a.name > b.name) {
				return 1;
			} else {
				return 0;
			}
		});
		this.setState({
			locations: [...temp],
			currentSort: "name",
		});
	};
	sortByClimate = () => {
		let temp = this.state.locations.sort((a, b) => {
			if (a.climate < b.climate) {
				return -1;
			} else if (a.climate > b.climate) {
				return 1;
			} else {
				return 0;
			}
		});
		this.setState({
			locations: [...temp],
			currentSort: "climate",
		});
	};
	sortByTerrain = () => {
		let temp = this.state.locations.sort((a, b) => {
			if (a.terrain < b.terrain) {
				return -1;
			} else if (a.terrain > b.terrain) {
				return 1;
			} else {
				return 0;
			}
		});
		this.setState({
			locations: [...temp],
			currentSort: "terrain",
		});
	};
	render() {
		let sortButtons = (
			<div>
				<button
					className={this.state.currentSort === "name" ? `selected` : null}
					onClick={this.sortByName}
				>
					Sort by Name
				</button>
				<button
					className={this.state.currentSort === "climate" ? `selected` : null}
					onClick={this.sortByClimate}
				>
					Sort by Climate
				</button>
				<button
					className={this.state.currentSort === "terrain" ? `selected` : null}
					onClick={this.sortByTerrain}
				>
					Sort by Terrain
				</button>
			</div>
		);
		return (
			<div className="locations">
				<h2>List of Locations</h2>
				<button onClick={this.showLocations}>
					{this.state.show ? `Hide Locations` : `Show Locations`}
				</button>
				{this.state.show && sortButtons}
				<div>
					<ul className="top">
						{this.state.show &&
							this.state.locations.map((location) => {
								return (
									<li key={location.id} className="location-card">
										<ul>
											<li>Name: {location.name}</li>
											<li>Climate: {location.climate}</li>
											<li>Terrain: {location.terrain}</li>
										</ul>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		);
	}
}
