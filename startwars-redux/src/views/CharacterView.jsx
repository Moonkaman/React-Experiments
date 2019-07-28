import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetch_character } from "../store/actions/Actions";

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

  useEffect(
    _ => {
      dispatch(fetch_character(props.match.params.id));
    },
    [dispatch, props.match.params.id]
  );

  if (character && !isFetchingCharacter) {
    return (
      <div>
        <h1>{character.name}</h1>
        <h2>Gender: {character.gender}</h2>
        <h2>Homeworld: {homeworld ? homeworld.name : "Loading..."}</h2>
        <h2>Species: {species ? species.name : "Loading..."}</h2>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default CharacterView;
