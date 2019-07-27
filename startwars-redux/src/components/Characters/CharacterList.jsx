import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { css } from "emotion";
import { LinkContainer } from "react-router-bootstrap";

const listGroupItemCss = css`
  display: flex;
  justify-content: space-between;

  & h6 {
    margin: 0px;
    line-height: 24px;
  }

  & p {
    margin: 0px;
  }
`;

const CharacterList = props => {
  return (
    <div>
      <ListGroup variant={props.groupVariant}>
        {props.characters.map(character => (
          <LinkContainer
            key={character.name + character.height}
            to={`/characters/${character.url.replace(/[^0-9]/g, "")}`}
          >
            <ListGroup.Item action className={listGroupItemCss}>
              <h6>{character.name}</h6>
              <p>{character.gender}</p>
            </ListGroup.Item>
          </LinkContainer>
        ))}
      </ListGroup>
    </div>
  );
};

export default CharacterList;
