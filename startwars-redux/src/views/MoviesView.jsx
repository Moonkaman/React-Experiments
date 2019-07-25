import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_movies } from "../store/actions/Actions";
import Spinner from "react-bootstrap/Spinner";

import MovieList from "../components/Movies/MoviesList";

const MoviesView = props => {
  const movies = useSelector(state => state.movie_reducers.movies);
  const fetchingMovies = useSelector(
    state => state.movie_reducers.is_fetching_movies
  );
  const dispatch = useDispatch();

  useEffect(
    _ => {
      if (movies.length === 0) {
        dispatch(fetch_movies());
      }
    },
    [dispatch, movies.length]
  );

  if (!fetchingMovies) {
    return (
      <div>
        <h2>Movies</h2>
        <MovieList movies={movies} />
      </div>
    );
  } else {
    return <Spinner animation="border" variant="primary" />;
  }
};

export default MoviesView;
