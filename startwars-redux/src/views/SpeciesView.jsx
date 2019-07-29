import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

import {
  fetch_species,
  fetch_species_characters,
  fetch_species_movies,
  reset_species_attributes
} from "../store/actions/Actions";

import SpeciesTab from "../components/Species/SpeciesTab";

const SpeciesView = props => {
  const species = useSelector(state => state.species_reducer.species);
  const homeworld = useSelector(
    state => state.species_reducer.species_homeworld
  );
  const movies = useSelector(state => state.species_reducer.species_movies);
  const characters = useSelector(
    state => state.species_reducer.species_characters
  );

  const dispatch = useDispatch();

  useEffect(
    _ => {
      dispatch(fetch_species(props.match.params.id));

      return _ => {
        dispatch(reset_species_attributes());
      };
    },
    [dispatch, props.match.params.id]
  );

  const getCharacters = _ => {
    dispatch(fetch_species_characters(species.people));
  };

  const getMovies = _ => {
    dispatch(fetch_species_movies(species.films));
  };

  if (species && homeworld) {
    return (
      <div>
        <h1>test</h1>
        <SpeciesTab
          getCharacters={getCharacters}
          getMovies={getMovies}
          species={{ ...species, characters, movies, homeworld }}
          noMovies={species.films.length === 0}
          noCharacters={species.people.length === 0}
        />
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default SpeciesView;
