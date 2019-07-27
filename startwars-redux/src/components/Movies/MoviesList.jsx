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

const Movie = props => {
  return (
    <ListGroup variant={props.groupVariant}>
      {props.movies.map(movie => (
        <LinkContainer
          key={movie.episode_id}
          to={`/movies/${movie.url.replace(/[^0-9]/g, "")}`}
        >
          <ListGroup.Item action className={listGroupItemCss}>
            <h6>{movie.title}</h6>
            <p>{movie.release_date}</p>
          </ListGroup.Item>
        </LinkContainer>
      ))}
    </ListGroup>
  );
};

export default Movie;
