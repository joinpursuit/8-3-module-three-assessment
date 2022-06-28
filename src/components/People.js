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
      isVisible: false,
    }
  }

  componentDidMount() {
    axios.get('https://ghibliapi.herokuapp.com/people').then((result) => {
      this.setState({ peopleList: result.data });
    });
  }
  
  handleChange = (event) => {
    const {value} = event.target;
    //this.setState({isVisible: false})
    
    if(value !== '') {
      this.setState({person: value})  
      this.setState({isValid: true}) 
      //this.setState({isDisable: false}) 
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
        this.setState({ isVisible: true })
      } else { 
        this.setState({ personSearch: ['Not Found'] }) 
        this.setState({ isValid: false })
        this.setState({ isVisible: false })
      }
      this.setState({person: ''})
      
    }
  }

  render () {
    return (
      <section className="people container">
        <div className="layout">
          <h1>People</h1>
          <div className="form__container">
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
                  disabled={this.state.isDisable}
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        {(this.state.isVisible) ? 
          <div className="person__info">
            <PersonInfo 
              personSearch={this.state.personSearch}
            />
          </div>
          : <div className="not__found">{this.state.personSearch[0]}</div>
        }
        </div>
      </section>
    )
  }
}

export default People;