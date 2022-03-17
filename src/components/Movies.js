/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import useStyle from "../style/Style";
import React from "react";

const Movies = ({ movies: { imdbID, Year, Poster, Title, Type } }) => {
  const classes = useStyle();
  return (
    <Card key={imdbID} className={classes.Card}>
      <CardMedia
        className={classes.CardMedia}
        component="img"
        image={Poster !== "N/A" ? Poster : "https://via.placeholder.com/500"}
        alt={Poster}
      />
      <CardContent className={classes.CardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {Title}
        </Typography>
        <Typography>
          {Year} {Type}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Movies;
