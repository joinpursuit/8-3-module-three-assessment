import React from "react";
import PersonInfo from "./PersonInfo";

import axios from "axios";

class People extends React.Component {
  constructor () {
    super ();
    this.state = {
      peopleList: [],
      personSearch: [],
      person: '',
      isValid: false,
    }
  }

  componentDidMount() {
    axios.get('https://ghibliapi.herokuapp.com/people').then((result) => {
      this.setState({ peopleList: result.data });
      //console.log(this.state.peopleList)
    });
  }
  
  handleChange = (event) => {
    const {value} = event.target;
    
    if(value !== '') {
      this.setState({person: value})  
      this.setState({isValid: true})  
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //
    if(this.state.isValid) {
      const filtered = (this.state.peopleList).filter(person => {
        return ((person.name).toLowerCase()).includes((this.state.person).toLowerCase());
      });

      if(filtered.length > 0) {
        this.setState({ personSearch: filtered })
        this.setState({ isValid: true })
      } else { 
        this.setState({ personSearch: ['Not Found'] }) 
        this.setState({ isValid: false })
      }
      this.setState({person: ''})
    }
  }

  render () {
    return (
      <section className="people">
        <div className="form__container">
          <h1>People</h1>
          <form
          >
            <div className="form__control">
              <label >Search for a Person</label>
              <input 
                type="text"
                id="person"
                value={this.state.person}
                onChange={this.handleChange}
              />
              <button
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      {(this.state.isValid) ? 
        <div className="person__info">
          <PersonInfo 
            personSearch={this.state.personSearch}
          />
        </div>
        : <p>{this.state.personSearch[0]}</p>
      }
      </section>
    )
  }
}

export default People;