import React, { Component } from 'react';
import './PeopleList.css';
// import PeopleDetails from './PeopleDetails';

class PeopleList extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      // searchInput: '',
      // found: null,
    };
  }

  fetchPeople = () => {
    fetch('https://ghibliapi.herokuapp.com/people')
      .then((response) => response.json())
      .then((data) => {
        console.log('data=', data);
        this.setState({ people: data });
      });
  };

  componentDidMount = () => {
    this.fetchPeople();
  };

  render() {
    const { people } = this.state;

    console.log('in render', people);
    const results = people.map((person) => {
      return (
        <li className='character'
          key={person.id}>
         <button className='character-btn' onClick={() => this.props.customClickHandler(person)}
        >
          {person.name}
          </button>
        </li>
      );
    });

    return (
      <div>
        <ul className='characters-list'>{results}</ul>
      </div>
    );
  }
}

export default PeopleList;

// https://codesandbox.io/s/pjmvovwo4q?file=/src/index.js:332-345
