import React from "react";
import PeopleDetail from "./PeopleDetail";
import "./People.css";

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPeople: "",
      peopleList: [],
      submitedSearchInput: false,
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    this.setState({
      submitedSearchInput: true,
    });
  };

  inputHandler = (event) => {
    this.setState({
      selectedPeople: event.target.value,
      submitedSearchInput: false,
    });
  };

  componentDidMount() {
    const URL = "https://ghibliapi.herokuapp.com/people";

    fetch(URL)
      .then((result) => result.json())
      .then((data) => {
        this.setState({ peopleList: data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { peopleList, selectedPeople, submitedSearchInput } = this.state;
    return (
      <div className="people">
        <h3>Search for a Person</h3>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            value={this.state.selectedPeople}
            onChange={this.inputHandler}
          />
          <button type="submit" className="submit">
            SUBMIT
          </button>
        </form>
        {submitedSearchInput ? (
          <PeopleDetail
            peopleList={peopleList}
            selectedPeople={selectedPeople}
          />
        ) : null}
      </div>
    );
  }
}

export default People;
