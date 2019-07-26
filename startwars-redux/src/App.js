import React from "react";
import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

import "./App.css";

import MoviesView from "./views/MoviesView";
import MovieView from "./views/MovieView";
import CharactersView from "./views/CharactersView";
import CharacterView from "./views/CharacterView";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>SWAPI App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer exact to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/movies">
              <Nav.Link>Movies</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/characters">
              <Nav.Link>Characters</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
