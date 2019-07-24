import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import MovieView from "./views/MovieView";

function App() {
  return (
    <div className="App">
      <Route exact path="/movies" component={MovieView} />
    </div>
  );
}

export default App;
