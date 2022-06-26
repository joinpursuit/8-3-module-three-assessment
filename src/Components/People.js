import React, { Component } from "react";
import "../Components/People.css";

export default class People extends Component {
  constructor() {
    super();
    this.state = {
      listOfPeople: [],
      nameInput: "",
      searchedCharacter: [],
    };
  }

  fetchMovies = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          listOfPeople: result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  handleChange = (event) => {
    this.setState({ nameInput: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let ifFound = this.state.listOfPeople.find((person) => {
      return this.state.nameInput.toLowerCase() === person.name.toLowerCase();
    });
    this.setState({
      searchedCharacter: ifFound,
    });
    event.target.reset();
  };

  render() {
    let { searchedCharacter } = this.state;
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.nameInput}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
        <div className="people-description">
          {searchedCharacter ? (
            <div>
              <h2>Name: {searchedCharacter.name}</h2>
              <p>Age:{searchedCharacter.age}</p>
              <p>Gender: {searchedCharacter.gender}</p>
              <p>Eye Color: {searchedCharacter.eye_color}</p>
              <p>Hair Color: {searchedCharacter.hair_color}</p>
            </div>
          ) : (
            <h2>Not Found!</h2>
          )}
        </div>
      </div>
    );
  }
}
