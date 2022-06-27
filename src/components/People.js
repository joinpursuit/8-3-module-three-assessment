import React from "react";
import { Container, Box } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { TextField, Button } from "@mui/material";
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
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
    } else {
      
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    
    
    const filtered = (this.state.peopleList).filter(person => {
      return ((person.name).toLowerCase()).includes((this.state.person).toLowerCase());
    });

    if(filtered.length > 0) {
      this.setState({ personSearch: filtered })
      this.setState({ isValid: true })
    } else { 
      this.setState({ personSearch: ['Not found'] }) 
      this.setState({ isValid: false })
    }
    this.setState({person: ''})
  }

  render () {
    return (
      <Container maxWidth="md" className="people">
        <h1>People</h1>
        <Box 
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
        <FormControl >
          <label id="demo-simple-select-label">Search for a Person</label>
          <TextField 
            id="outlined-basic" 
            variant="outlined"
            value={this.state.person}
            onChange={this.handleChange}
          />
          <Button 
            variant="contained"
            size="large"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </FormControl>
      </Box>
      {(this.state.isValid) ? 
        <Stack spacing={2} className="person__info">
          <PersonInfo 
            personSearch={this.state.personSearch} 
            // personSearch={this.state.person}
          />
        </Stack>
        : <p>{this.state.personSearch[0]}</p>
      }
      </Container>
    )
  }
}

export default People;