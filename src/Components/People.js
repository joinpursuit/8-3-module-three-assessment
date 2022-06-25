import React from 'react'

class People extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      peopleData: [],
      names: '',
      eyes: '',
      hair: '',
      gender: '',
      age: '',
      notFound: '',
    }
  }

  componentDidMount() {
    let Base_Url = 'https://ghibliapi.herokuapp.com/'
    let people = 'people'
    fetch(`${Base_Url}${people}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ peopleData: json })
      })

      .catch((error) => console.log(error))
  }

  clearForm = () => {
    this.setState({ userInput: '' })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { userInput } = this.state

    for (let data of this.state.peopleData) {
      if (userInput === data.name) {
        this.setState({ eyes: data.eye_color })
      }
      if (userInput === data.name) {
        this.setState({ names: data.name })
      }
      if (userInput === data.name) {
        this.setState({ hair: data.hair_color })
      }
      if (userInput === data.name) {
        this.setState({ gender: data.gender })
      }
      if (userInput === data.name) {
        this.setState({ age: data.age })
      }
    }
    event.target.reset()
  }

  searchNotFound = (datas) => {
    const { userInput, names, eyes, hair, gender, age } = this.state
    for (let data of datas) {
      if (userInput === data.name) {
        return (
          <section>
            <h2>Name: {names}</h2>
            <p>EyeColor: {eyes}</p>
            <p>Hair Color: {hair}</p>
            <p>Gender: {gender}</p>
            <p>Age: {age}</p>
          </section>
        )
      }
    }
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value })
  }

  render() {
    const { peopleData } = this.state
    return (
      <div className='people'>
        <h2>Search for a Person</h2>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} />
          <button>Submit</button>
        </form>
        <section>
          {this.searchNotFound(peopleData) ? (
            this.searchNotFound(peopleData)
          ) : (
            <p> Not Found </p>
          )}
        </section>
      </div>
    )
  }
}

export default People
