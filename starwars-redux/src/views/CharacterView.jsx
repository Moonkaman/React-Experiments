import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetch_character,
  fetch_character_movies,
  reset_character_attributes
} from "../store/actions/Actions";

import CharacterTab from "../components/Characters/CharacterTab";

const CharacterView = props => {
  const isFetchingCharacter = useSelector(
    state => state.character_reducer.is_fetching_character
  );

  const dispatch = useDispatch();

  const character = useSelector(state => state.character_reducer.character);
  const homeworld = useSelector(
    state => state.character_reducer.character_homeworld
  );
  const species = useSelector(
    state => state.character_reducer.character_species
  );
  const movies = useSelector(state => state.character_reducer.character_movies);

  useEffect(
    _ => {
      dispatch(fetch_character(props.match.params.id));

      return _ => {
        dispatch(reset_character_attributes());
      };
    },
    [dispatch, props.match.params.id]
  );

  const getMovies = _ => {
    dispatch(fetch_character_movies(character.films));
  };

  if (character && species && homeworld && !isFetchingCharacter) {
    return (
      <CharacterTab
        getMovies={getMovies}
        character={{ ...character, species, homeworld, movies }}
      />
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default CharacterView;
