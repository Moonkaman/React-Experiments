import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Spinner from "react-bootstrap/Spinner";
import { css } from "emotion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";

import CharacterList from "../Characters/CharacterList";
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

const SpeciesTab = props => {
  const [key, setKey] = useState("general");

  const handleTabSelect = k => {
    switch (k) {
      case "characters":
        if (props.species.characters.length === 0) {
          props.getCharacters();
        }
        break;

      case "movies":
        if (props.species.movies.length === 0) {
          props.getMovies();
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
            <Card.Header>{props.species.name}</Card.Header>
            <Card.Body>
              <Card.Title>Info</Card.Title>
              <ListGroup>
                <LinkContainer
                  to={`/planets/${props.species.homeworld.url.replace(
                    /[^0-9]/g,
                    ""
                  )}`}
                >
                  <ListGroup.Item action className={cardSectionCss}>
                    <h6>Homeworld</h6>
                    <p>{props.species.homeworld.name}</p>
                  </ListGroup.Item>
                </LinkContainer>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Language</h6>
                  <p>{props.species.language}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Classification</h6>
                  <p>{props.species.classification}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Designation</h6>
                  <p>{props.species.designation}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Average Height</h6>
                  <p>{props.species.average_height}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Skin Colors</h6>
                  <p>{props.species.skin_colors}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Hair Colors</h6>
                  <p>{props.species.hair_colors}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Eye Colors</h6>
                  <p>{props.species.eye_colors}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Average Lifespan</h6>
                  <p>{props.species.average_lifespan}</p>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="characters" title="Characters" className={tabCss}>
          <Card>
            <Card.Header>
              Relavent characters of {props.species.name}
            </Card.Header>
            {props.species.characters.length === 0 ? (
              props.noCharacters ? (
                <Card.Body>
                  <Card.Title>
                    This species has no relavent characters
                  </Card.Title>
                </Card.Body>
              ) : (
                <Spinner animation="border" variant="primary" />
              )
            ) : (
              <CharacterList
                characters={props.species.characters}
                groupVariant="flush"
              />
            )}
          </Card>
        </Tab>
        <Tab eventKey="movies" title="Movies" className={tabCss}>
          <Card>
            <Card.Header>Movies Featuring {props.species.name}</Card.Header>
            {props.species.movies.length === 0 ? (
              props.noMovies ? (
                <Card.Body>
                  <Card.Title>This species has no movie appearances</Card.Title>
                </Card.Body>
              ) : (
                <Spinner animation="border" variant="primary" />
              )
            ) : (
              <MoviesList movies={props.species.movies} groupVariant="flush" />
            )}
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SpeciesTab;
