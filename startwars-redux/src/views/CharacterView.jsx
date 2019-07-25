import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetch_character } from "../store/actions/Actions";

const CharacterView = props => {
  const isFetchingCharacter = useSelector(
    state => state.character_reducer.is_fetching_character
  );

  const dispatch = useDispatch();

  const character = useSelector(state => state.character_reducer.character);

  useEffect(
    _ => {
      dispatch(fetch_character(props.match.params.id));
    },
    [dispatch]
  );

  if (character && !isFetchingCharacter) {
    return (
      <div>
        <h1>{character.name}</h1>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default CharacterView;
