import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { css } from "emotion";

const listGroupItemCss = css`
  display: flex;
  justify-content: space-between;

  & h4 {
    margin: 0px;
    font-weight: normal;
  }

  & p {
    margin: 0px;
  }
`;

const CharacterList = props => {
  return (
    <div>
      <ListGroup>
        {props.characters.map(character => (
          <Link
            key={character.name + character.height}
            to={`/characters/${character.url.replace(/[^0-9]/g, "")}`}
          >
            <ListGroup.Item action className={listGroupItemCss}>
              <h4>{character.name}</h4>
              <p>{character.gender}</p>
            </ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </div>
  );
};

export default CharacterList;
