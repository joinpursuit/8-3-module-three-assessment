import React from 'react';
import './people.css';

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      peopleList: [],
      userInput: '',
      searchedPerson: [],
    };
  }

  peopleSearch = () => {
    fetch('https://ghibliapi.herokuapp.com/people')
      .then((result) => result.json())
      .then((data) => {
        this.setState({
          peopleList: data,
        });
      });
  };

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
      searchedPerson: searched,
    });
    event.target.reset();
  };

  render() {
    let { searchedPerson } = this.state;

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
          {searchedPerson ? (
            <div className='personFacts'>
              <p>
                <strong>Name:</strong> {searchedPerson.name}
              </p>
              <p>
                <strong>Age:</strong> {searchedPerson.age}
              </p>
              <p>
                <strong>Gender:</strong> {searchedPerson.gender}
              </p>
            </div>
          ) : (
            <h3>Not Found!</h3>
          )}
        </div>
      </div>
    );
  }
}

export default People;
