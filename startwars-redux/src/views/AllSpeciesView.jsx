import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { css } from "emotion";

import { fetch_all_species } from "../store/actions/Actions";

import SpeciesList from "../components/Species/SpeciesList";

const AllSpeciesView = props => {
  const isFetchingAllSpecies = useSelector(
    state => state.species_reducer.is_fetching_all_species
  );
  const all_species = useSelector(state => state.species_reducer.all_species);
  const next = useSelector(state => state.species_reducer.next);
  const prev = useSelector(state => state.species_reducer.prev);

  const dispatch = useDispatch();

  useEffect(
    _ => {
      if (all_species.length === 0) {
        dispatch(fetch_all_species());
      }
    },
    [dispatch, all_species]
  );

  const buttonToolbarCSS = css`
    border-top: 1px dashed rgba(0, 0, 0, 0.125);
    display: flex;
    justify-content: ${next && prev
      ? "space-between"
      : next
      ? "flex-end"
      : "flex-start"};
    padding: 10px;
  `;

  const cardHeaderCSS = css`
    & h3 {
      font-weight: normal;
      margin: 0px;
    }
  `;

  const spinnerCSS = css`
    margin: 0 auto;
  `;

  const changePage = dir => {
    if (dir === "next") {
      dispatch(fetch_all_species(next));
    } else {
      dispatch(fetch_all_species(prev));
    }
  };

  if (all_species.length === 0 || isFetchingAllSpecies) {
    return <Spinner animation="border" variant="primary" />;
  } else {
    return (
      <Card className={cardHeaderCSS}>
        <Card.Header>
          <h3>Species</h3>
        </Card.Header>
        <SpeciesList species={all_species} groupVariant="flush" />
        <ButtonToolbar className={buttonToolbarCSS}>
          {prev && (
            <Button variant="primary" onClick={_ => changePage("prev")}>
              Previous Page
            </Button>
          )}
          {next && (
            <Button variant="primary" onClick={_ => changePage("next")}>
              Next Page
            </Button>
          )}
        </ButtonToolbar>
      </Card>
    );
  }
};

export default AllSpeciesView;
