import React, { Component } from "react";
import "./Movies.css";

export default class Movies extends Component {
	constructor() {
		super();
		this.state = {
			movie: "",
			moviesList: [],
		};
	}
	handleChange = (event) => {
		const { value } = event.target;
		this.setState({ movie: value });
	};
	componentDidMount() {
		this.getMovies();
	}
	getMovies = () => {
		const { BASE_URL } = this.props;
		fetch(`${BASE_URL}/films`)
			.then((response) => response.json())
			.then((obj) => {
				this.setState({ moviesList: [...obj] });
			});
	};
	render() {
		const movieInfo = this.state.moviesList.find((movie) => {
			return movie.title === this.state.movie;
		});
		return (
			<div className="movies">
				<h2>Select a Movie</h2>
				<select onChange={this.handleChange}>
					<option key="empty" value="">
						empty
					</option>
					{this.state.moviesList.map((item) => {
						return (
							<option key={item.id} value={item.title}>
								{item.title}
							</option>
						);
					})}
				</select>
				<div className="current-movie">
					<h2>{this.state.movie && `Title: ${movieInfo.title}`}</h2>
					<h4>{this.state.movie && `Release Date:  ${movieInfo.release_date}`}</h4>
					<h5>{this.state.movie && `Description: ${movieInfo.description}`}</h5>
				</div>
			</div>
		);
	}
}
