import React from "react";
import './People.css'

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      person: [],
      userEntry: "",
      submittedPerson: [],
    };
  }

  componentDidMount() {
    let baseURL = "https://ghibliapi.herokuapp.com/people";
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => this.setState({ person: data }));
    //name age and gender
  }

  handleChange = (event) => {
    this.setState({ userEntry: event.target.value });
  };

  handleForm = (event) => {
    event.preventDefault();
    let { person, userEntry } = this.state;
    let searchedPerson = person.find(
      (person) => person.name.toLowerCase() === userEntry.toLowerCase()
    );
    this.setState({ submittedPerson: searchedPerson });
    event.target.reset();
  };

  render() {
    let { submittedPerson } = this.state;
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleForm}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Search Characters..."
          />
          <button type="submit">Submit</button>
        </form>
        <div>
          {submittedPerson ? (
            <div className="attributes">
              <p>
                <h5>Name:</h5> {submittedPerson.name}
              </p>
              <p>
                <h5>Age:</h5> {submittedPerson.age}
              </p>
              <p>
                <h5>Gender:</h5> {submittedPerson.gender}
              </p>
            </div>
          ) : (
            <h3>Person Not Found!</h3>
          )}
        </div>
      </div>
    );
  }
}

export default People;
