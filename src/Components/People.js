import "./Styles/People.css"
import React, {Component} from "react";

class People extends Component {
	constructor() {
		super();

		this.state = {
			fetchdata: [],
			people: {},
			output: "",
		};
	}

 componentDidMount() {
		fetch("https://ghibliapi.herokuapp.com/people/")
			.then((res) => res.json())
			.then((data) => {
				this.setState({ fetchdata: data, });
				data.forEach((person) => {
					let firstPeople = this.state.people;
					firstPeople[person.name.toLowerCase()] = person;
				this.setState({
					people: firstPeople,
				})
			})
		});
	};

	submit = (e) => {
		e.preventDefault();
		let search = e.target.input.value.toLowerCase();
		if (this.state.people[search]){
			this.setState({
				output: (
					<div className="output">
						<p>Name: {this.state.people[search].name}</p>
						<p>Age: {this.state.people[search].age}</p>
						<p>Gender: {this.state.people[search].gender}</p>
					</div>
				),
			});
		} else {
			this.setState({ output: <p>Not Found</p>})
		}
	}

render() {
	return (
		<div className="people">
			<div>
			<h1 className="people-text">Search for a Person</h1>
			<form className="search" placeholder="Find Your Person" onSubmit={this.submit}>
			<input type="text" name="input" />
			<button type="submit">Submit</button>
			</form>
			<div id="output">
			{this.state.output}
			</div>
			
			</div>
		</div>
		)
	}
}

export default People