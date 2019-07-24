import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_movies } from "../store/actions/Actions";

import Movie from "../components/MovieView/Movie";

const MoviesView = props => {
  const movies = useSelector(state => state.movies);
  const fetchingMovies = useSelector(state => state.is_fetching_movies);
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
        {movies.map(movie => (
          <Movie key={movie.episode_id} movie={movie} />
        ))}
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default MoviesView;
