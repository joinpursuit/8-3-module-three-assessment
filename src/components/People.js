import React from "react";

import axios from "axios";

class People extends React.Component {
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
      // <Container maxWidth="md" className="movies">
      //   <h1>Movies</h1>
      //   <Box 
      //     component="form"
      //     sx={{
      //       '& > :not(style)': { m: 1, width: '50ch' },
      //     }}
      //     noValidate
      //     autoComplete="off"
      //   >
      //   <FormControl fullWidth>
      //     <label id="demo-simple-select-label">Select a Movie</label>
      //     <Select
      //       labelId="demo-simple-select-label"
      //       id="demo-simple-select"
      //       value={this.state.movieSelected}
      //       name="movie-select"
      //       onChange={this.handleChange}
      //     >
      //       <MenuItem key='0' value='' ></MenuItem>
      //       {this.state.movieList.map(movie =>  {
      //         return  <MenuItem key={movie.id} 
      //                           value={movie.id}>{movie.title}
      //                 </MenuItem>  
      //       })}
      //     </Select>
      //   </FormControl>
      // </Box>
      // {(this.state.isSelected) ? 
      //   <Stack spacing={2} className="movie__info">
      //     <MovieInfo 
      //       movieList={this.state.movieList} 
      //       movieSelected={this.state.movieSelected}
      //     />
      //   </Stack>
      //   : null
      // }
      // </Container>
    )
  }
}

export default People;