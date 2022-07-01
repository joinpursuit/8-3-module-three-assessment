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
      (chara) => chara.name.toUpperCase() === searchInput.toUpperCase(),
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
    let { ghibliCharacter } = this.state;
    return (
      <section className='people'>
        <h1>Search For a Person</h1>
        <form onSubmit={this.submitForm}>
          <input
            className='textField'
            type='text'
            placeholder='Search...'
            //value={this.state.searchInput}
            onChange={this.updateSearch}
          />
          <button
            type='submit'
            className='searchButton'
            onClick={() => {
              /* if (this.checkInput()) {
                return <p>Not Found</p>;
              } else {
                fetchHandler(this.state.searchInput); //causes a runtime error
                this.clearText();
              } */
            }}
          >
            Search
          </button>
          <div>
            {ghibliCharacter ? (
              <div>
                <h1> {ghibliCharacter.name}</h1>
                <h2>{ghibliCharacter.age}</h2>
                <h2>{ghibliCharacter.gender}</h2>
                <h2>{ghibliCharacter.hair_color}</h2>
                <h2>{ghibliCharacter.eye_color}</h2>
              </div>
            ) : (
              <h2>Nothing to see here.</h2>
            )}
          </div>
        </form>
      </section>
    );
  }
}
export default People;
