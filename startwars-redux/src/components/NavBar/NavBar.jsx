import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>SWAPI App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer exact to="/">
              <NavLink>Home</NavLink>
            </LinkContainer>
            <LinkContainer to="/movies">
              <Nav.Link>Movies</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/characters">
              <Nav.Link>Characters</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/planets">
              <Nav.Link>Planets</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/species">
              <Nav.Link>Species</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
