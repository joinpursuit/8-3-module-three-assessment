import React from "react";
import { Container, Box } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { TextField, Button } from "@mui/material";
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
//import PersonInfo from "./PersonInfo";

import axios from "axios";

class Locations extends React.Component {
  constructor () {
    super ();
    this.state = {
      locationsList: [],
      location: '',
      isValid: false,
    }
  }

  componentDidMount() {
    // axios.get('https://ghibliapi.herokuapp.com/people').then((result) => {
    //   this.setState({ locationsList: result.data });
    //   //console.log(this.state.peopleList)
    // });
  }
  
  handleChange = (event) => {
    const {value} = event.target;
    
    if(value !== '') {
      
    } else {
      
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    
    
    // const filtered = (this.state.peopleList).filter(person => {
    //   return ((person.name).toLowerCase()).includes((this.state.person).toLowerCase());
    // });

    // if(filtered.length > 0) {
    //   this.setState({ personSearch: filtered })
    //   this.setState({ isValid: true })
    // } else { 
    //   this.setState({ personSearch: ['Not found'] }) 
    //   this.setState({ isValid: false })
    // }
    // this.setState({person: ''})
  }

  render () {
    return (
      <Container maxWidth="md" className="locations">
        <h1>List of Locations</h1>
        <Box 
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
        <FormControl >
          <Button 
            variant="contained"
            size="large"
            onClick={this.handleSubmit}
          >
            Show Locations
          </Button>
        </FormControl>
      </Box>
      {(this.state.isValid) ? 
        <Stack spacing={2} className="person__info">
          {/* <PersonInfo 
            personSearch={this.state.personSearch} 
            // personSearch={this.state.person}
          /> */}
        </Stack>
        : <p>{this.state.personSearch[0]}</p>
      }
      </Container>
    )
  }
}

export default Locations;