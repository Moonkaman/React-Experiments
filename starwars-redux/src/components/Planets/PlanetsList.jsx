import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";
import { css } from "emotion";

const listGroupItemCss = css`
  display: flex;
  justify-content: space-between;

  & h6 {
    margin: 0px;
    line-height: 24px;
  }

  & p {
    margin: 0px;
  }
`;

const PlanetsList = props => {
  return (
    <ListGroup variant={props.groupVariant}>
      {props.planets.map(planet => (
        <LinkContainer
          key={planet.created}
          to={`/planets/${planet.url.replace(/[^0-9]/g, "")}`}
        >
          <ListGroup.Item action className={listGroupItemCss}>
            <h6>{planet.name}</h6>
            <p>{planet.terrain}</p>
          </ListGroup.Item>
        </LinkContainer>
      ))}
    </ListGroup>
  );
};

export default PlanetsList;
