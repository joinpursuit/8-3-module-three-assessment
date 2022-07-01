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
    this.setState({ result: ghibliCharacter });
  };

  userInputSearch = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  checkInput = () => {
    if (this.state.searchInput.length === 0) {
      return <p>Invalid Input Length</p>;
    }
  };

  render() {
    console.log(this.state);
    let { result } = this.state;
    return (
      <section className='people'>
        <h1>Search For a Person</h1>
        <form onSubmit={this.submitForm}>
          <input
            className='textField'
            type='text'
            placeholder='Search...'
            onChange={this.userInputSearch}
          />
          <button
            type='submit'
            className='searchButton'
            onClick={this.checkInput}
          >
            Search
          </button>
          <div id='CharacterDiv'>
            {result ? (
              <div className='CharacterCardInnerDiv'>
                <h1>Name: {result.name}</h1>
                <h2>Gender: {result.gender}</h2>
                <h2>Age: {result.age}</h2>
                <h2>Eye Color: {result.eye_color}</h2>
                <h2>Hair Color: {result.hair_color}</h2>

                <h2>
                  Character ID: <p className='charaID'>{result.id}</p>
                </h2>
              </div>
            ) : (
              <h2>
                Not Found! <span>Nothing to see here.</span>
              </h2>
            )}
          </div>
        </form>
      </section>
    );
  }
}
export default People;
