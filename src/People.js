import React from 'react';
import './SearchBar.css';

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      age: '',
      eye_color: '',
      hair_color: '',
    };
  }

  updatePersonInfo = () => {
    fetch('https://ghibliapi.herokuapp.com/people?format=j1')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          personAge: data.age,
          personEyeColor: data.eye_color,
          personHairColor: data.hair_color,
          userSearchInput: data.searchInput,
        });
      });
  };
  componentDidMount() {
    this.updatePersonInfo();
  }
  updateSearch = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  clearText = () => {
    this.setState = { searchInput: ' ' };
  };
  checkInput = () => {
    return this.state.searchInput.length === 0;
  };

  render() {
    console.log(this.state);
    return (
      <section className='people'>
        <h1>Search For a Person</h1>
        <input
          className='textField'
          type='text'
          placeholder='Search...'
          value={this.state.searchInput}
          onChange={this.updateSearch}
        />
        <button
          type='button'
          className='searchButton'
          onClick={() => {
            if (this.checkInput()) {
              return <p>Not Found</p>;
            } else {
              //fetchHandler(this.state.searchInput); //causes a runtime error
              //this.clearText();
            }
          }}
        >
          Search
        </button>
      </section>
    );
  }
}
export default People;
