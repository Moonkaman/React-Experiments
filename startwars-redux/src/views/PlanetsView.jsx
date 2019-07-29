import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BounceLoader } from "react-spinners";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { css } from "emotion";

import { fetch_planets } from "../store/actions/Actions";

import PlanetsList from "../components/Planets/PlanetsList";

const PlanetsView = props => {
  const isFetchingPlanets = useSelector(
    state => state.planet_reducer.is_fetching_planets
  );
  const planets = useSelector(state => state.planet_reducer.planets);
  const next = useSelector(state => state.planet_reducer.next);
  const prev = useSelector(state => state.planet_reducer.prev);

  const dispatch = useDispatch();

  useEffect(
    _ => {
      if (planets.length === 0) {
        dispatch(fetch_planets());
      }
    },
    [dispatch, planets]
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
      dispatch(fetch_planets(next));
    } else {
      dispatch(fetch_planets(prev));
    }
  };

  if (planets.length === 0 || isFetchingPlanets) {
    return <BounceLoader className={spinnerCSS} />;
  } else {
    return (
      <Card className={cardHeaderCSS}>
        <Card.Header>
          <h3>Planets</h3>
        </Card.Header>
        <PlanetsList planets={planets} groupVariant="flush" />
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

export default PlanetsView;
