import { Component } from 'react';
import './People.css';

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      result: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    const matchFound = this.props.allPeople.find(
      (people) => people.name.toLowerCase() === this.state.search.toLowerCase()
    );
    if (matchFound) {
      this.setState({
        result: matchFound,
        search: '',
      });
    } else {
      this.setState({
        result: 'Not Found',
        search: '',
      });
    }
  };

  render() {
    const { search, result } = this.state;

    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <form>
          <input onChange={this.handleChange} value={search} type="text" />
          <button onClick={this.handleClick}>Submit</button>
        </form>
        {result && result !== 'Not Found' ? (
          <div>
            <h3>Name: {result.name}</h3>
            <p>Age: {result.age}</p>
            <p>Gender: {result.gender}</p>
          </div>
        ) : (
          <p>{result}</p>
        )}
      </div>
    );
  }
}

export default People;
