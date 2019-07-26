import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const CharacterList = props => {
  return (
    <div>
      <ListGroup>
        {props.characters.map(character => (
          <Link
            key={character.name + character.height}
            to={`/characters/${character.url.replace(/[^0-9]/g, "")}`}
          >
            <ListGroup.Item action>{character.name}</ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </div>
  );
};

export default CharacterList;
