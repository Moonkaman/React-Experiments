import React from "react";
import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import "./App.css";

import MoviesView from "./views/MoviesView";
import MovieView from "./views/MovieView";
import CharactersView from "./views/CharactersView";
import CharacterView from "./views/CharacterView";

function App() {
  return (
    <div className="App">
      <Container>
        <Route exact path="/movies" component={MoviesView} />
        <Route exact path="/movies/:id" component={MovieView} />
        <Route exact path="/characters" component={CharactersView} />
        <Route exact path="/characters/:id" component={CharacterView} />
      </Container>
    </div>
  );
}

export default App;
