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

const SpeciesList = props => {
  return (
    <ListGroup variant={props.groupVariant}>
      {props.species.map(specie => (
        <LinkContainer
          key={specie.created}
          to={`/species/${specie.url.replace(/[^0-9]/g, "")}`}
        >
          <ListGroup.Item action className={listGroupItemCss}>
            <h6>{specie.name}</h6>
            <p>{specie.classification}</p>
          </ListGroup.Item>
        </LinkContainer>
      ))}
    </ListGroup>
  );
};

export default SpeciesList;
