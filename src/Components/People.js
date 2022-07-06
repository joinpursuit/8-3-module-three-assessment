import React, { Component } from 'react';
import './People.css';
import PeopleList from './PeopleList';
import PeopleDetails from './PeopleDetails';

class People extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
    };
  }

  handlePerson(person) {
    this.setState({ people: person });
  }

  render() {
    const { people } = this.state;
    return (
      <div className='people-page'>
        <div className='people-click'>
        <PeopleList
          customClickHandler={(person) => this.handlePerson(person)}
          people={people}
        />
       </div>
       <div className='people-display'>
        <PeopleDetails people={people} />
        </div>
      </div>
    );
  }
}
export default People;
