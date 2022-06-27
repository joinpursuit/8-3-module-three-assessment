import React from "react";
import { Container, Box } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { TextField } from "@mui/material";
import Select from '@mui/material/Select';
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
    } else {
      this.setState({movieSelected: ''});
      this.setState({isSelected: false});  
    }
  };

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
          <label id="demo-simple-select-label">Select a Movie</label>
          <TextField
            id="outlined-select"
            select
            value={this.state.movieSelected}
            onChange={this.handleChange}
          >
            <MenuItem key='0' value='' ></MenuItem>
            {this.state.movieList.map(movie =>  {
              return  <MenuItem key={movie.id} 
                                value={movie.id}>{movie.title}
                      </MenuItem>  
            })}  
          </TextField>

          {/* <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.movieSelected}
            name="movie-select"
            onChange={this.handleChange}
          >
            <MenuItem key='0' value='' ></MenuItem>
            {this.state.movieList.map(movie =>  {
              return  <MenuItem key={movie.id} 
                                value={movie.id}>{movie.title}
                      </MenuItem>  
            })}
          </Select> */}
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