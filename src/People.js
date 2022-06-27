import React from "react";
import Css from "./People.css";

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      peopleList: [],
      userInput: "",
      selectedPerson: [],
    };
  }

  peopleSearch = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((result) => result.json())
      .then((data) => {
        this.setState({
          peopleList: data,
        });
      })
      .catch((error) => console.log(error));
  };

  /**
   * fetches data when the page loads. peoplelist state is already populated.
   */
  componentDidMount = () => {
    this.peopleSearch();
  };

  inputHandler = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  formSubmit = (event) => {
    event.preventDefault();
    let { peopleList, userInput } = this.state;
    let searched = peopleList.find(
      (person) => person.name.toLowerCase() === userInput.toLowerCase()
    );
    this.setState({
      selectedPerson: searched,
    });
    event.target.reset();
  };

  render() {
    let { selectedPerson, peopleList } = this.state;
    let allpeople = peopleList.map((person) => {
      return (
        <li className="person-card" key={person.id}>
          <strong>{person.name}</strong>
        </li>
      );
    });

    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <form onSubmit={this.formSubmit}>
          <input
            onChange={this.inputHandler}
            type="text"
            placeholder="Search a character"
          />
          <button type="submit">Submit</button>
        </form>
        <div>
          {selectedPerson ? (
            <div className="personDeets">
              <p>
                <strong>Name:</strong> {selectedPerson.name}
              </p>
              <p>
                <strong>Age:</strong> {selectedPerson.age}
              </p>
              <p>
                <strong>Gender:</strong> {selectedPerson.gender}
              </p>
              <p>
                <strong>Eye Color:</strong> {selectedPerson.eye_color}
              </p>
              <p>
                <strong>Hair Color:</strong> {selectedPerson.hair_color}
              </p>
            </div>
          ) : (
            <h3>Not Found!</h3>
          )}
        </div>
        <hr></hr>
      </div>
    );
  }
}
export default People;
