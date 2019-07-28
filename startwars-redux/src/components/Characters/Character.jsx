import React from "react";
import { Link } from "react-router-dom";

const Character = props => {
  return (
    <div>
      <Link to={`/characters/${props.character.url.replace(/[^0-9]/g, "")}`}>
        {props.character.name}
      </Link>
    </div>
  );
};

export default Character;
