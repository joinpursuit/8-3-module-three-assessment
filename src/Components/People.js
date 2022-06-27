import React from "react";
import "./People.css";

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = { person: "", profile: null };
  }
  handleChange = ({ target }) => {
    this.setState({ person: target.value });
  };
  handleClick = () => {
    this.setState({
      profile: this.props.peopleArray.find((e) => e.name === this.state.person),
    });
  };
  render() {
    return (
      <div className="people menu">
        <h2>Search for a Person</h2>
        <input
          name="name"
          type="text"
          value={this.state.person}
          onChange={this.handleChange}
        ></input>
        <button
          onClick={() => {
            this.handleClick();
          }}
          type="button"
        >
          Submit
        </button>

        <div>
          {this.state.profile ? (
            <div className="peopledata">
              ><h2>Name: {this.state.profile.name}</h2>
              <p>
                <strong>Age:</strong>
                {this.state.profile.age}
              </p>
              <p>
                <strong>Gender:</strong>
                {this.state.profile.gender}
              </p>
              <p>
                <strong>Eye Color:</strong>
                {this.state.profile.eye_color}
              </p>
              <p>
                <strong>Hair Color:</strong>
                {this.state.profile.hair_color}
              </p>
            </div>
          ) : (
            "Not Found"
          )}
        </div>
      </div>
    );
  }
}

export default People;
