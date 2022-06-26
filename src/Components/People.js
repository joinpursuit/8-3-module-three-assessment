import React, { Component } from "react";
import DisplayPersonInfo from "./DisplayPersonInfo";
import FindPeople from "./FindPeople";
import "./People.css";

export default class People extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      foundPerson: {},
      searchMade: false,
    };
  }

  fetchPeople = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ people: json });
      })
      .catch(() => {});
  };

  componentDidMount() {
    this.fetchPeople();
  }

  getSearchedPerson = (searchedPerson) => {
    const found = this.state.people.find((person) => {
      return person.name.toLowerCase() === searchedPerson.toLowerCase();
    });
    this.setState({ foundPerson: found, searchMade: true });
  };

  render() {
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <FindPeople
          getSearchedPerson={this.getSearchedPerson}
          foundPerson={this.state.foundPerson}
        />
        {this.state.searchMade && (
          <DisplayPersonInfo foundPerson={this.state.foundPerson} />
        )}
      </div>
    );
  }
}
