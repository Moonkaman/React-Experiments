import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { GridLoader } from "react-spinners";

import CharacterList from "../Characters/CharacterList";

const MovieTab = props => {
  const [key, setKey] = useState("general");

  const handleTabSelect = k => {
    switch (k) {
      case "characters":
        if (props.chars.length == 0) {
          props.getChars();
        }
    }
    setKey(k);
  };

  return (
    <div>
      <h1>{props.movie.title}</h1>
      <Tabs activeKey={key} onSelect={handleTabSelect}>
        <Tab eventKey="general" title="General Info">
          <h2>General Info about {props.movie.title}</h2>
        </Tab>
        <Tab eventKey="characters" title="Characters">
          <h2>Characters in {props.movie.title}</h2>
          {props.chars.length === 0 ? (
            <GridLoader />
          ) : (
            <CharacterList characters={props.chars} />
          )}
        </Tab>
        <Tab eventKey="planets" title="Planets">
          <h2>Planets in {props.movie.title}</h2>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MovieTab;
