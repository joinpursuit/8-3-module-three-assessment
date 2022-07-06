import React, { Component } from 'react';
 import './PeopleDetails.css';

class PeopleDetails extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      found: null,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { people } = this.state;
    console.log('found=', event.target.value);
    // this.setState({ searchInput: '' });
    this.setState({
      found:
        people.find((person) => {
          return person.name.toLowerCase() === event.target.name.toLowerCase();
        }) || null,
    });

    // event.target.reset();
  };

  handleDataValue = (e) => {
    e.preventDefault();
    console.log('indatavalue', e.target.value);
    this.setState({ people: e.target.value });
  };

  render() {
    const { people } = this.props;
    // const { found } = this.state;
    console.log('inpeopledetails', people);
    if (!people) {
      return <div>Select a film</div>;
    }

    const results = 
      <div className='peopleInfo'>
        <h2>
          Name: <span>{people.name}</span>
        </h2>
        <p>
          <strong>Age: </strong>
          {people.age}
        </p>
        <p>
          <strong>Gender: </strong>
          {people.gender}
        </p>
        <p>
          <strong>Hair Color:</strong> {people.hair_color}
        </p>
        <p>
          <strong>Eye Color: </strong>
          {people.eye_color}
        </p>
      </div>
    

    return (
      <div className='name-container'>
        <form onSubmit={this.handleSubmit}>
          <label>
            <div className='wrapper'>
              <input
                type='text'
                id='searchbar'
                placeholder='Search here'
                name='searchbar'
                defaultValue={this.props.people.name}
                onChange={(e) => this.handleDataValue(e)}
              />
              {/* <button className='people-button'>Search</button> */}
            </div>
          </label>
        </form>
        <section className='result'>{results}</section>
      </div>
    );
  }
}

export default PeopleDetails;
