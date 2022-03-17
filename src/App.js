import {
  AppBar,
  Container,
  IconButton,
  TextField,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";
import useStyle from "./style/Style";
import Movies from "./components/Movies";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const classes = useStyle();
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className="app">
      <header>
        <AppBar>
          <Toolbar>
            <Typography className={classes.Title} variant="h4">
              {" "}
              MoviesViewer{" "}
            </Typography>
            <TextField
              label="Search a movie"
              variant="standard"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></TextField>
            <IconButton
              className={classes.IconButton}
              onClick={() => searchMovies(search)}
            >
              <SearchIcon></SearchIcon>
            </IconButton>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <Container className={classes.CardGrid} maxWidth="md">
          {movies !== undefined ? (
            <Grid container spacing={4}>
              {movies.map((movie, index) => {
                return (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Movies movies={movie}></Movies>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <div className={classes.error}>
              <Typography variant="h2"> No movies found </Typography>
            </div>
          )}
        </Container>
      </main>
    </div>
  );
};

export default App;
