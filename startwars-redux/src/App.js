import React from "react";
import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { css } from "emotion";

import NavBar from './components/NavBar/NavBar';
import MoviesView from "./views/MoviesView";
import MovieView from "./views/MovieView";
import CharactersView from "./views/CharactersView";
import CharacterView from "./views/CharacterView";
import PlanetsView from './views/PlanetsView';
import PlanetView from './views/PlanetView';
import AllSpeciesView from './views/AllSpeciesView';
import SpeciesView from './views/SpeciesView';

const containerCss = css`
  padding-top: 50px;
`;

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container className={containerCss}>
        <Route exact path="/movies" component={MoviesView} />
        <Route exact path="/movies/:id" component={MovieView} />
        <Route exact path="/characters" component={CharactersView} />
        <Route exact path="/characters/:id" component={CharacterView} />
        <Route exact path="/planets" component={PlanetsView} />
        <Route exact path="/planets/:id" component={PlanetView} />
        <Route exact path="/species" component={AllSpeciesView} />
        <Route exact path="/species/:id" component={SpeciesView} />
      </Container>
    </div>
  );
}

export default App;
