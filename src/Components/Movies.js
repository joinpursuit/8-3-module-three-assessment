import React from 'react'

class Movies extends React.Component {
  constructor() {
    super()
    this.state = {
      movieTitle: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      movieTitle: event.target.value,
    })
  }

  getDetail = (datas, title) => {
    for (let data of datas) {
      if (data.title === title) {
        return data.description
      }
    }
  }
  getDate = (datas, title) => {
    for (let data of datas) {
      if (data.title === title) {
        return data.release_date
      }
    }
  }

  render() {
    const { data } = this.props
    const { movieTitle } = this.state
    
    return (
      <div className='movies'>
        <h2>Select a movie</h2>
        <select name='title' id='title' onChange={this.handleChange}>
          <option value=''></option>
          {data.map((movie, index) => (
            <option value={movie.title} key={index}>
              {movie.title}
            </option>
          ))}
        </select>
        <h2>Title: {movieTitle}</h2>
        <p>Released Date: {this.getDate(data, movieTitle)}</p>
        <p>Description: {this.getDetail(data, movieTitle)} </p>
      </div>
    )
  }
}

export default Movies
