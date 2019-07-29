import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

import {
  fetch_planet,
  fetch_planet_residents,
  fetch_planet_movies,
  reset_planet_attributes
} from "../store/actions/Actions";

import PlanetTab from "../components/Planets/PlanetTab";

const PlanetView = props => {
  const planet = useSelector(state => state.planet_reducer.planet);
  const residents = useSelector(state => state.planet_reducer.planet_residents);
  const movies = useSelector(state => state.planet_reducer.planet_movies);

  const dispatch = useDispatch();

  useEffect(
    _ => {
      dispatch(fetch_planet(String(props.match.params.id)));

      return _ => {
        dispatch(reset_planet_attributes());
      };
    },
    [dispatch, props.match.params.id]
  );

  const getResidents = _ => {
    dispatch(fetch_planet_residents(planet.residents));
  };

  const getMovies = _ => {
    console.log(planet);
    dispatch(fetch_planet_movies(planet.films));
  };

  if (planet) {
    return (
      <PlanetTab
        getResidents={getResidents}
        getMovies={getMovies}
        planet={{ ...planet, residents, movies }}
        noMovies={planet.films.length === 0}
        noResidents={planet.residents.length === 0}
      />
    );
  } else {
    return <Spinner />;
  }
};

export default PlanetView;
