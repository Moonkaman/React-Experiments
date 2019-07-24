import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import MoviesView from "./views/MoviesView";
import MovieView from "./views/MovieView";

function App() {
  return (
    <div className="App">
      <Route exact path="/movies" component={MoviesView} />
      <Route exact path="/movies/:id" component={MovieView} />
    </div>
  );
}

export default App;
