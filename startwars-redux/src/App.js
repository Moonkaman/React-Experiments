import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import MoviesView from "./views/MoviesView";
import MovieView from "./views/MovieView";
import CharactersView from "./views/CharactersView";
import CharacterView from "./views/CharacterView";

function App() {
  return (
    <div className="App">
      <Route exact path="/movies" component={MoviesView} />
      <Route exact path="/movies/:id" component={MovieView} />
      <Route exact path="/characters" component={CharactersView} />
      <Route exact path="/characters/:id" component={CharacterView} />
    </div>
  );
}

export default App;
