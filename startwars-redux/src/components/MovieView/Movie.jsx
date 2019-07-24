import React from "react";
import { Link } from "react-router-dom";

const Movie = props => {
  return (
    <div>
      <Link to={`/movies/${props.movie.episode_id}`}>{props.movie.title}</Link>
    </div>
  );
};

export default Movie;
