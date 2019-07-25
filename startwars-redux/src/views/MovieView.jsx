import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

// Actions
import { fetch_movie, fetch_movie_characters } from "../store/actions/Actions";

// Components
import Character from "../components/Characters/Character";

const MovieView = props => {
  const fetchingMovie = useSelector(
    state => state.movie_reducers.is_fetching_movie
  );
  const movie = useSelector(state => state.movie_reducers.movie);
  const chars = useSelector(state => state.movie_reducers.movie_characters);
  const isFetchingMovieChars = useSelector(
    state => state.movie_reducers.is_fetching_movie_characters
  );

  const [hasChars, setHasChars] = useState(false);

  const dispatch = useDispatch();
  console.log(movie);
  console.log(fetchingMovie);
  useEffect(
    _ => {
      dispatch(fetch_movie(props.match.params.id));
    },
    [dispatch, props.match.params.id]
  );

  const getChars = _ => {
    dispatch(fetch_movie_characters(movie.characters));
    setHasChars(true);
  };

  if (!fetchingMovie && movie) {
    return (
      <div>
        <h1>
          {movie.title} Episode {movie.episode_id}
        </h1>
        <h3>Opening Text</h3>
        <p>{movie.opening_crawl}</p>
        <h3>Characters: </h3>
        {hasChars ? (
          <div>
            {isFetchingMovieChars ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              chars.map(char => <Character character={char} />)
            )}
          </div>
        ) : (
          <button onClick={getChars}>Get List of Characters</button>
        )}
      </div>
    );
  } else {
    return <Spinner animation="border" variant="primary" />;
  }
};

export default MovieView;
