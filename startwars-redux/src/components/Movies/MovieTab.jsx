import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { GridLoader } from "react-spinners";
import { css } from "emotion";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import CharacterList from "../Characters/CharacterList";

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
`;

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
                  <p>Director</p>
                  <p>{props.movie.director}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <p>Producer</p>
                  <p>{props.movie.producer}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <p>Release Date</p>
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
              <GridLoader />
            ) : (
              <CharacterList characters={props.chars} groupVariant="flush" />
            )}
          </Card>
        </Tab>
        <Tab eventKey="planets" title="Planets" className={tabCss}>
          <h2>Planets in {props.movie.title}</h2>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MovieTab;
