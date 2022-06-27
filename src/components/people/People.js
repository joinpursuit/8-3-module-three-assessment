import React, { Component } from "react";

export default class People extends Component {
  constructor() {
    super();
    this.state = {
      found: {},
      names: [],
      input: "",
    };
  }

  api = () => {
    fetch("https://ghibliapi.herokuapp.com/people/")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ names: json, isLoaded: true });
      });
  };

  componentDidMount() {
    this.api();
  }

  changeHandler = (event) => {
    this.setState({ input: event.target.value });
  };

  submit = (event) => {
    event.preventDefault();

    let find = this.state.names.find((person) => {
      return this.state.input.toLowerCase() === person.name.toLowerCase();
    });
    this.setState({
      found: find,
    });
    event.target.reset();
  };

  render() {
    let { found } = this.state;
    return (
      <div className="people">
        <form onSubmit={this.submit}>
          <h1>Search for a Person</h1>
          <input
            value={this.state.input}
            onChange={this.changeHandler}
            type="text"
          />
          <button type="submit">SUBMIT</button>
        </form>
        <section className="description">
          {" "}
          {found ? (
            <div>
              <h2>Name: {found.name}</h2>
              <p>Age:{found.age}</p>
              <p>Eye Color: {found.eye_color}</p>
              <p>Hair Color: {found.hair_color}</p>
              <p>Gender: {found.gender}</p>
            </div>
          ) : (
            <h2>Not Found!</h2>
          )}
        </section>
        <div className="people-description"></div>
      </div>
    );
  }
}
