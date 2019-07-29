import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Spinner from "react-bootstrap/Spinner";
import { css } from "emotion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

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

const PlanetTab = props => {
  const [key, setKey] = useState("general");

  const handleTabSelect = k => {
    switch (k) {
      case "residents":
        if (props.planet.residents.length === 0) {
          props.getResidents();
        }
        break;

      case "movies":
        if (props.planet.movies.length === 0) {
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
            <Card.Header>{props.planet.name}</Card.Header>
            <Card.Body>
              <Card.Title>Info</Card.Title>
              <ListGroup>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Population</h6>
                  <p>{props.planet.population}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Terrain</h6>
                  <p>{props.planet.terrain}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Climate</h6>
                  <p>{props.planet.climate}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Gravity</h6>
                  <p>{props.planet.gravity}</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Surface Water</h6>
                  <p>{props.planet.surface_water}%</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Diameter</h6>
                  <p>{props.planet.diameter}</p>
                </ListGroup.Item>
                <ListGroup.Item action className={cardSectionCss}>
                  <h6>Rotation Period</h6>
                  <p>{props.planet.rotation_period}d</p>
                </ListGroup.Item>
                <ListGroup.Item className={cardSectionCss}>
                  <h6>Orbial Period</h6>
                  <p>{props.planet.orbital_period}d</p>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="residents" title="Residents" className={tabCss}>
          <Card>
            <Card.Header>Residents of {props.planet.name}</Card.Header>
            {props.planet.residents.length === 0 ? (
              props.noResidents ? (
                <Card.Body>
                  <Card.Title>This planet has no residents</Card.Title>
                </Card.Body>
              ) : (
                <Spinner animation="border" variant="primary" />
              )
            ) : (
              <CharacterList
                characters={props.planet.residents}
                groupVariant="flush"
              />
            )}
          </Card>
        </Tab>
        <Tab eventKey="movies" title="Movies" className={tabCss}>
          <Card>
            <Card.Header>Movies Featuring {props.planet.name}</Card.Header>
            {props.planet.movies.length === 0 ? (
              props.noMovies ? (
                <Card.Body>
                  <Card.Title>This planet has no movie appearances</Card.Title>
                </Card.Body>
              ) : (
                <Spinner animation="border" variant="primary" />
              )
            ) : (
              <MoviesList movies={props.planet.movies} groupVariant="flush" />
            )}
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default PlanetTab;
