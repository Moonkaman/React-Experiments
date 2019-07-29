import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Spinner from "react-bootstrap/Spinner";
import { css } from "emotion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";

import MoviesList from "../Movies/MoviesList";

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

const CharacterTab = props => {
  const [key, setKey] = useState("general");

  const handleTabSelect = k => {
    switch (k) {
      case "movies":
        if (props.character.movies.length === 0) {
          props.getMovies();
        }
        break;

      default:
        console.log(k);
    }
    setKey(k);
  };
  console.log(props);
  return (
    <div>
      <Tabs activeKey={key} onSelect={handleTabSelect}>
        <Tab eventKey="general" title="General Info" className={tabCss}>
          <Card>
            <Card.Header>{props.character.name}</Card.Header>
            <Card.Body>
              <Card.Title>Info</Card.Title>
              <ListGroup>
                <LinkContainer
                  to={`/species/${props.character.species.url.replace(
                    /[^0-9]/g,
                    ""
                  )}`}
                >
                  <ListGroup.Item action className={cardSectionCss}>
                    <h6>Species</h6>
                    <p>{props.character.species.name}</p>
                  </ListGroup.Item>
                </LinkContainer>
                <LinkContainer
                  to={`/planets/${props.character.homeworld.url.replace(
                    /[^0-9]/g,
                    ""
                  )}`}
                >
                  <ListGroup.Item action className={cardSectionCss}>
                    <h6>Homeworld</h6>
                    <p>{props.character.homeworld.name}</p>
                  </ListGroup.Item>
                </LinkContainer>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Height</h6>
                  <p>{props.character.height}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Mass</h6>
                  <p>{props.character.mass}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Hair Color</h6>
                  <p>{props.character.hair_color}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Skin Color</h6>
                  <p>{props.character.skin_color}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Eye Color</h6>
                  <p>{props.character.eye_color}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Birth Year</h6>
                  <p>{props.character.birth_year}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Gender</h6>
                  <p>{props.character.gender}</p>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="movies" title="Movies" className={tabCss}>
          <Card>
            <Card.Header>Movies including {props.character.name}</Card.Header>
            {props.character.movies.length === 0 ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              <MoviesList
                movies={props.character.movies}
                groupVariant="flush"
              />
            )}
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default CharacterTab;
