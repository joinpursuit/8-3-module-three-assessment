import React, { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import ghibliAPI from "../data/ghibliAPI";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import MovieInfo from "./MovieInfo";

import axios from "axios";

class Movies extends React.Component {
  constructor () {
    super ();
    this.state = {
      movieList: [],
      movieSelected: '',
      isSelected: false,
    }
  }

  componentDidMount() {
    axios.get('https://ghibliapi.herokuapp.com/films').then((result) => {
      this.setState({ movieList: result.data });
    });
  }
  
  handleChange = (event) => {
    const {value} = event.target;
    //
    if(value !== '') {
      this.setState({movieSelected: value});
      this.setState({isSelected: true});
    }
  };

  // const handleAPICall = () => {
  //   axios.get('http://localhost:5000/api/pets').then((result) => {
  //     this.setState({ petList: result.data });
  //   });
  // };

  // useEffect(() => {
  //   let list;
    // const response = ghibliAPI.get('/films', {
    //   params: {
    //       // q: searchInput,
    //       // maxResults: maxResultsInput
    //   }
    // })
    // console.log('test')
    // fetch(baseURL)
    // .then((response) => response.json())
    // .then(data => {
    //   console.log(data)
    //     // >> Looping through the data retrieved from the API.
    //     //data.forEach((movie) => {
    //         // >> Cloning the remote data to create a local copy.
    //         // movies = [...data];
    //         // const option = new Option(movie.title, movie.id);
    //         // selectTitles.add(option);
    //     //});
    // })
    // .catch((error) => {
    //   console.log(error)
    //     // const message = createErrorMessage(error);
    //     // document.querySelector("main").append(message);
    // });
    // axios.get('http://localhost:5000/api/pets').then((result) => {
    //   this.setState({ petList: result.data });
    // });

  //   axios.get(baseURL).then((result) => {
  //     //console.log(result.data)
  //     setMovieList(result.data) 
  //   });
  //   //console.log(movieList)
  // });

  // const getData = async () => {
  //   const { data } = await axios.get(baseURL);
  //   setMovieList(data);
  //   movies = [...data];
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  render () {
    return (
      <Container maxWidth="md" className="movies">
        <h1>Movies</h1>
        <Box 
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
        <FormControl fullWidth>
          <label id="demo-simple-select-label">Select a title</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.movieSelected}
            name="movie-select"
            onChange={this.handleChange}
          >
            <MenuItem key='0' value=''></MenuItem>
            {this.state.movieList.map(movie =>  {
              return <MenuItem key={movie.id} value={movie.id}>{movie.title}</MenuItem>  
            })}
          </Select>
        </FormControl>
      </Box>
      {(this.state.isSelected) ? 
        <Stack spacing={2} className="movie__info">
          <MovieInfo 
            movieList={this.state.movieList} 
            movieSelected={this.state.movieSelected}
          />
        </Stack>
        : null
      }
      </Container>
    )
  }
}

export default Movies;