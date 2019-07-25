import React from "react";
import { Link } from "react-router-dom";

const Movie = props => {
  return (
    <div>
      <Link to={`/movies/${props.movie.url.replace(/[^0-9]/g, "")}`}>
        {props.movie.title}
      </Link>
    </div>
  );
};

export default Movie;
