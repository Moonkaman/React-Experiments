import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { GridLoader } from "react-spinners";
import { css } from "emotion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import CharacterList from "../Characters/CharacterList";
import PlanetsList from "../Planets/PlanetsList";

const tabCss = css`
  text-align: left;
  margin-top: -2px;
  & h4 {
    font-weight: normal;
  }
`;

const cardSectionCss = css`
  display: flex;
  justify-content: space-between;
  & p {
    margin: 0px;
  }

  & h6 {
    margin: 0px;
    line-height: 24px;
  }
`;

const PlanetTab = props => {
  const [key, setKey] = useState("general");

  const handleTabSelect = k => {
    switch (k) {
      case "characters":
        if (props.chars.length === 0) {
          props.getChars();
        }
        break;

      case "planets":
        if (props.planets.length === 0) {
          props.getPlanets();
        }
        break;

      default:
    }
    setKey(k);
  };

  return (
    <div>
      <Tabs activeKey={key} onSelect={handleTabSelect}>
        <Tab eventKey="general" title="General Info" className={tabCss}>
          <Card>
            <Card.title />
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default PlanetTab;
