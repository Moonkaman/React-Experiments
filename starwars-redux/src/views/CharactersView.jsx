import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
      if (characters.length === 0) {
        dispatch(fetch_characters());
      }
    },
    [dispatch, characters]
  );

  const buttonToolbarCSS = css`
    border-top: 1px dashed rgba(0, 0, 0, 0.125);
    display: flex;
    justify-content: ${next && prev
      ? "space-between"
      : next
      ? "flex-end"
      : "flex-start"};
    padding: 10px;
  `;

  const cardHeaderCSS = css`
    & h3 {
      font-weight: normal;
      margin: 0px;
    }
  `;

  const spinnerCSS = css`
    margin: 0 auto;
  `;

  const changePage = dir => {
    if (dir === "next") {
      dispatch(fetch_characters(next));
    } else {
      dispatch(fetch_characters(prev));
    }
  };

  if (characters.length === 0 || isFetchingCharacters) {
    return <Spinner animation="border" variant="primary" />;
  } else {
    return (
      <Card className={cardHeaderCSS}>
        <Card.Header>
          <h3>Characters</h3>
        </Card.Header>
        <CharacterList characters={characters} groupVariant="flush" />
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
      </Card>
    );
  }
};

export default CharactersView;
