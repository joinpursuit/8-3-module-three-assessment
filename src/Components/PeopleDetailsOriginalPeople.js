import React, { Component } from 'react';
import './People.css';

class PeopleDetailsOriginalPeople extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      searchInput: '',
      found: null,
    };
  }

  fetchPeople = () => {
    fetch('https://ghibliapi.herokuapp.com/people')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ people: data });
      });
  };

  componentDidMount = () => {
    this.fetchPeople();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { people, searchInput } = this.state;
    this.setState({ searchInput: '' });
    this.setState({
      found:
        people.find((person) => {
          return person.name.toLowerCase() === searchInput.toLowerCase();
        }) || null,
    });
    event.target.reset();
  };

  //prevent refresh
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { found } = this.state;
    const results = found ? (
      <div className='peopleInfo'>
        <h2>
          Name: <span>{found.name}</span>
        </h2>
        <p>
          <strong>Age: </strong>
          {found.age}
        </p>
        <p>
          <strong>Gender: </strong>
          {found.gender}
        </p>
        <p>
          <strong>Hair Color:</strong> {found.hair_color}
        </p>
        <p>
          <strong>Eye Color: </strong>
          {found.eye_color}
        </p>
      </div>
    ) : (
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>Not Found</div>
    );

    return (
      <div className='people'>
        <h1> Search for a Person</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            <div className='wrapper'>
              <input
                type='text'
                id='searchbar'
                placeholder='Search here'
                name='searchbar'
                value={this.searchInput}
                onChange={this.handleChange}
              />
              <button
                className='people-button'
                onClick={this.fetchPeople}
                type='submit'
              >
                Search
              </button>
            </div>
          </label>
        </form>

        <section>{results}</section>
      </div>
    );
  }
}

export default PeopleDetailsOriginalPeople;
