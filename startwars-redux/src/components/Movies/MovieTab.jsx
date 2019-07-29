import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Spinner from "react-bootstrap/Spinner";
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

const MovieTab = props => {
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
            <Card.Header>Star Wars: {props.movie.title}</Card.Header>
            <Card.Body>
              <Card.Title>Opening Crawl</Card.Title>
              <Card.Text>{props.movie.opening_crawl}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Title>More Info</Card.Title>
              <ListGroup>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Director</h6>
                  <p>{props.movie.director}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Producer</h6>
                  <p>{props.movie.producer}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Release Date</h6>
                  <p>{props.movie.release_date}</p>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="characters" title="Characters" className={tabCss}>
          <Card>
            <Card.Header>Characters in {props.movie.title}</Card.Header>
            {props.chars.length === 0 ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              <CharacterList characters={props.chars} groupVariant="flush" />
            )}
          </Card>
        </Tab>
        <Tab eventKey="planets" title="Planets" className={tabCss}>
          <Card>
            <Card.Header>Planets in {props.movie.title}</Card.Header>
            {props.planets.length === 0 ? (
              <Spinner animation="border" variant="primary" centered />
            ) : (
              <PlanetsList planets={props.planets} groupVariant="flush" />
            )}
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MovieTab;
