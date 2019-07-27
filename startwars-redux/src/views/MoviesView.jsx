import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_movies } from "../store/actions/Actions";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { css } from "emotion";

import MovieList from "../components/Movies/MoviesList";

const cardHeaderCSS = css`
  & h3 {
    font-weight: normal;
    margin: 0px;
  }
`;

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
      <Card>
        <Card.Header className={cardHeaderCSS}>
          <h3>Movies</h3>
        </Card.Header>
        <MovieList movies={movies} groupVariant="flush" />
      </Card>
    );
  } else {
    return <Spinner animation="border" variant="primary" />;
  }
};

export default MoviesView;
