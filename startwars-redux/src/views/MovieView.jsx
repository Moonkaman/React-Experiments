import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_movies } from "../store/actions/Actions";

const MovieView = props => {
  const movies = useSelector(state => state.movies);
  const fetchingMovies = useSelector(state => state.is_fetching_movies);
  const dispatch = useDispatch();

  useEffect(
    _ => {
      dispatch(fetch_movies());
    },
    [dispatch]
  );

  if (!fetchingMovies) {
    return (
      <div>
        {movies.map(movie => (
          <h1>{movie.title}</h1>
        ))}
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default MovieView;
