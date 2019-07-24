import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetch_movie } from "../store/actions/Actions";

const MovieView = props => {
  const fetchingMovie = useSelector(state => state.is_fetching_movie);
  const movie = useSelector(state => state.movie);
  const chars = useSelector(state => state.movie_characters);
  const isFetchingMovieChars = useSelector(
    state => state.is_fetching_movie_characters
  );
  const dispatch = useDispatch();
  console.log(movie);
  console.log(fetchingMovie);
  useEffect(
    _ => {
      dispatch(fetch_movie(props.match.params.id));
    },
    [dispatch, props.match.params.id]
  );
  if (!fetchingMovie && movie) {
    return (
      <div>
        <h1>{movie.title}</h1>
        <h3>Characters: </h3>
        <ul>
          {isFetchingMovieChars ? (
            <h4>Loading...</h4>
          ) : (
            chars.map(char => <ul>{char.name}</ul>)
          )}
        </ul>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default MovieView;
