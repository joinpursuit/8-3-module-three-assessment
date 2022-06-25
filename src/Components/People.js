import { Component } from 'react';
import './People.css';

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      match: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    const getMatch = this.props.allPeople.find(
      (people) => people.name.toLowerCase() === this.state.search.toLowerCase()
    );
    if (getMatch) {
      this.setState({
        match: getMatch,
        search: '',
      });
    } else {
      this.setState({
        match: 'Not Found',
        search: '',
      });
    }
  };

  render() {
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <form>
          <input
            onChange={this.handleChange}
            value={this.state.search}
            type="text"
          />
          <button onClick={this.handleClick}>Submit</button>
        </form>
        {this.state.match && this.state.match !== 'Not Found' ? (
          <div>
            <h3>Name: {this.state.match.name}</h3>
            <p>Age: {this.state.match.age}</p>
            <p>Gender: {this.state.match.gender}</p>
          </div>
        ) : (
          <p>{this.state.match}</p>
        )}
      </div>
    );
  }
}

export default People;
