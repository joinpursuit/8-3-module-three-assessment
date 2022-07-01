import React from 'react';
import './SearchBar.css';

let BASE_URL = 'https://ghibliapi.herokuapp.com';
let PATH = '/people';
let EXTENSION = '?format=j1';
function errorHandler(error) {
  console.log(error);
  return error;
}

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
      ghibliData: [],
      searchInput: '',
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}${PATH}${EXTENSION}`)
      .then((response) => response.json())
      .then((result) => this.setState({ ghibliData: result }))
      .catch(errorHandler);
  }
  submitForm = (event) => {
    event.preventDefault();
    let { ghibliData, searchInput } = this.state;
    let ghibliCharacter = ghibliData.find(
      (chara) => chara.name === searchInput,
    );
    this.setState({ result: searchInput });
  };

  userInputSearch = (event) => {
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
    let searchInput = this.state;
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
