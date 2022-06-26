import React from "react";
import { Container, Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MovieInfo = (props) => {
  //
  const { movieList, movieSelected } = props;

  
  const filtered = movieList.filter(movie => {
    return movie.id === movieSelected;
  });

  return (
    <Card variant="outlined">
      {filtered.map((movie, index) => {
        return (
          <React.Fragment key={index}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                
              </Typography>
              <Typography variant="h2" component="div">
                Title: {movie.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Release date: {movie.release_date}
              </Typography>
              <Typography variant="body2">
                {movie.description}  
              </Typography>
            </CardContent>
          </React.Fragment>
        );
      })}
    </Card>
  )
}

export default MovieInfo;