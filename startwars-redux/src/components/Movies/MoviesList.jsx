import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { css } from "emotion";

const listGroupItemCss = css`
  display: flex;
  justify-content: space-between;

  & h4 {
    margin: 0px;
    font-weight: normal;
  }

  & p {
    margin: 0px;
  }
`;

const Movie = props => {
  return (
    <ListGroup>
      {props.movies.map(movie => (
        <Link
          key={movie.episode_id}
          to={`/movies/${movie.url.replace(/[^0-9]/g, "")}`}
        >
          <ListGroup.Item action className={listGroupItemCss}>
            <h4>{movie.title}</h4>
            <p>{movie.release_date}</p>
          </ListGroup.Item>
        </Link>
      ))}
    </ListGroup>
  );
};

export default Movie;
