import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Movies from './Components/Movies'
import People from './Components/People'
import Location from './Components/Location'
import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    let Base_Url = 'https://ghibliapi.herokuapp.com/'
    let film = 'films'
    fetch(`${Base_Url}${film}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json })
      })
      .catch((error) => console.log(error))
  }

  render() {
    // console.log(this.state.title)
    let { data } = this.state
    return (
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies data={data} />} />
          <Route path='/people' element={<People />} />
          <Route path='/location' element={<Location />} />
        </Routes>
      </div>
    )
  }
}

export default App
