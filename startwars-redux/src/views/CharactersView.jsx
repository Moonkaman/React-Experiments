import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BounceLoader } from "react-spinners";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import { css } from "emotion";

import { fetch_characters } from "../store/actions/Actions";

import CharacterList from "../components/Characters/CharacterList";

const CharactersView = props => {
  const isFetchingCharacters = useSelector(
    state => state.character_reducer.is_fetching_characters
  );
  const characters = useSelector(state => state.character_reducer.characters);
  const next = useSelector(state => state.character_reducer.next);
  const prev = useSelector(state => state.character_reducer.prev);

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

  const buttonToolbarCSS = css`
    display: flex;
    justify-content: ${next && prev
      ? "space-between"
      : next
      ? "flex-end"
      : "flex-start"};
    padding: 10px;
  `;

  const changePage = dir => {
    if (dir === "next") {
      dispatch(fetch_characters(next));
    } else {
      dispatch(fetch_characters(prev));
    }
  };

  if (characters.length === 0 || isFetchingCharacters) {
    return <BounceLoader />;
  } else {
    return (
      <div>
        <h1>Characters</h1>
        <CharacterList characters={characters} />
        <ButtonToolbar className={buttonToolbarCSS}>
          {prev && (
            <Button variant="primary" onClick={_ => changePage("prev")}>
              Previous Page
            </Button>
          )}
          {next && (
            <Button variant="primary" onClick={_ => changePage("next")}>
              Next Page
            </Button>
          )}
        </ButtonToolbar>
      </div>
    );
  }
};

export default CharactersView;
