import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

// Actions
import {
  fetch_movie,
  fetch_movie_characters,
  fetch_movie_planets
} from "../store/actions/Actions";

// Components
import MovieTab from "../components/Movies/MovieTab";

const MovieView = props => {
  const fetchingMovie = useSelector(
    state => state.movie_reducers.is_fetching_movie
  );
  const movie = useSelector(state => state.movie_reducers.movie);
  const chars = useSelector(state => state.movie_reducers.movie_characters);
  const movie_planets = useSelector(
    state => state.movie_reducers.movie_planets
  );

  const dispatch = useDispatch();
  useEffect(
    _ => {
      dispatch(fetch_movie(props.match.params.id));
    },
    [dispatch, props.match.params.id]
  );

  const getChars = _ => {
    dispatch(fetch_movie_characters(movie.characters));
  };

  const getPlanets = _ => {
    dispatch(fetch_movie_planets(movie.planets));
  };

  if (!fetchingMovie && movie) {
    return (
      <MovieTab
        movie={movie}
        getChars={getChars}
        chars={chars}
        getPlanets={getPlanets}
        planets={movie_planets}
      />
    );
  } else {
    return <Spinner animation="border" variant="primary" />;
  }
};

export default MovieView;
