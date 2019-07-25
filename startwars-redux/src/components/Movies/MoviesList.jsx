import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const Movie = props => {
  return (
    <ListGroup>
      {props.movies.map(movie => (
        <Link
          key={movie.episode_id}
          to={`/movies/${movie.url.replace(/[^0-9]/g, "")}`}
        >
          <ListGroup.Item action>{movie.title}</ListGroup.Item>
        </Link>
      ))}
    </ListGroup>
  );
};

export default Movie;
