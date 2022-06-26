import React, { Component } from "react";
import DisplayPersonInfo from "./DisplayPersonInfo";

class FindPeople extends React.Component {
  constructor() {
    super();
    this.state = {
      searchedPerson: "",
    };
  }

  updatePersonInput = (event) => {
    this.setState({
      searchedPerson: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      searchedPerson: "",
    });
  };

  render() {
    const { getSearchedPerson } = this.props;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            id="find-person"
            type="text"
            onChange={(event) => this.updatePersonInput(event)}
            required
          />
          <button
            type="submit"
            onClick={() => getSearchedPerson(this.state.searchedPerson)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FindPeople;
