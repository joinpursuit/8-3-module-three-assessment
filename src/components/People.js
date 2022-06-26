import React from "react";
import SearchBar from "./SearchBar";
import PeopleInfo from "./PeopleInfo";

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      found: {},
      char: [],
    };
  }
  componentDidMount = () => {
    fetch("https://ghibliapi.herokuapp.com/people/")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ char: json });
        // console.log(json);
      });
  };

  foundInfo = (search) => {
    const info = this.state.char.find((value) => {
      return search.toLowerCase() === value.name.toLowerCase();
    });
    this.setState({ found: info });
  };

  render() {
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <SearchBar char={this.state.char} foundInfo={this.foundInfo} />
        <div className="peopleBox">
          <PeopleInfo person={this.state.found} />
        </div>
      </div>
    );
  }
}
export default People;
