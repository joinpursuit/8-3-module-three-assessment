import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PersonInfo = (props) => {
  //
  const [isValid, setIsValid] = useState(false);
  const { personSearch } = props;

  
  

  //((filtered.length > 0) ? setIsValid(true) : setIsValid(true))
  

  return (
    <>
      {/* {(isValid) ?  */}
      <Card variant="outlined">
        {personSearch.map((person, index) => {
          return (
            <React.Fragment key={index}>
              {/* {console.log(person)} */}
              <CardContent>
                <Typography variant="h4" component="div">
                  Name: {person.name}
                </Typography>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                  Age: {person.age}  
                </Typography>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                  Eye color: {person.eye_color}  
                </Typography>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                  Hair color: {person.hair_color}  
                </Typography>
                <Typography variant="body2">
                  
                </Typography>
              </CardContent>
            </React.Fragment>
          );
        })}
      </Card>
      {/* :
      <Box
        sx={{
          // some styles
          '& .ChildSelector': {
            bgcolor: 'primary.main',
          },
        }}
      >Not Found</Box>
      } */}
    </>
  )
}

export default PersonInfo;