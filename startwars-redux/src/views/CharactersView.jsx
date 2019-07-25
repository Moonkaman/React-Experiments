import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetch_characters } from "../store/actions/Actions";

import Character from "../components/Characters/Character";

const CharactersView = props => {
  const isFetchingCharacters = useSelector(
    state => state.character_reducer.is_fetching_characters
  );
  const characters = useSelector(state => state.character_reducer.characters);

  const dispatch = useDispatch();

  useEffect(
    _ => {
      console.log(characters);
      if (characters.length === 0) {
        console.log("fire");
        dispatch(fetch_characters());
      }
    },
    [dispatch, characters]
  );

  return (
    <div>
      <h1>Characters</h1>
    </div>
  );
};

export default CharactersView;
