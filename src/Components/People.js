import React, { Component } from "react";

export default class People extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      peopleArr: [],
      seekCharacter: [],
    };
  }

  getMovies = () => {
    const BASE_URL = "https://ghibliapi.herokuapp.com/";
    fetch(`${BASE_URL}people`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          peopleArr: result,
        });
      });
  };

  componentDidMount() {
    this.getMovies();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const ifFound = this.state.peopleArr.find((person) => {
      return this.state.input.toLowerCase() === person.name.toLowerCase();
    });
    this.setState({
      seekCharacter: ifFound,
    });
    event.target.reset();
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    let { seekCharacter } = this.state;
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <div>
          {seekCharacter ? (
            <div>
              <h2>Name: {seekCharacter.name}</h2>
              <p>Age:{seekCharacter.age}</p>
              <p>Gender: {seekCharacter.gender}</p>
              <p>Eye Color: {seekCharacter.eye_color}</p>
              <p>Hair Color: {seekCharacter.hair_color}</p>
            </div>
          ) : (
            <p>Not Found</p>
          )}
        </div>
      </div>
    );
  }
}
