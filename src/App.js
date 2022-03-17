import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

const App = () => {
  const api_key = "http://www.omdbapi.com/?i=tt3896198&apikey=d7a3b1f9";
  const movie = {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00…QtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "Batman v Superman: Dawn of Justice",
    Type: "movie",
    Year: "2016",
    imdbID: "tt2975590",
  };

  const fetchMovies = async (title) => {
    const obj = await fetch(`${api_key}&s=${title}`);
    const response = await obj.json();
    console.log(response.Search);
  };

  useEffect(() => {
    fetchMovies("superman");
  }, []);

  return (
    <div>
      <header>
        <CssBaseline></CssBaseline>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h4" noWrap>
              MovieViewer
            </Typography>
            <TextField label="Search movies" variant="standard"></TextField>
            <SearchIcon></SearchIcon>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <Container>
          <Grid container spacing={4}>
            <Grid item>
              <Card>
                <CardMedia image = {movie.Poster} alt = "https://placeholder.com/400"></CardMedia>
                <CardContent>
                  <Typography variant="h5"> {movie.Title}</Typography>
                  <Typography> {movie.Year}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

        </Container>
      </main>
    </div>
  );
};

export default App;
