import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import { css } from "emotion";

const aCss = css`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const HomeView = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1>Starwars Redux App</h1>
        <p>
          This is an app I built using React, React Hooks, Redux, React-Redux
          with their new Hooks, Bootstrap and React-Bootstrap. All the data
          comes from the <a href="https://swapi.dev/">SWAPI API</a> via the
          native JavaScript Fetch functionality. You can start looking at the
          rest of the app by clicking any of the links in the navbar above or
          click the button below to take you to the movies.
        </p>
        <Link to="/movies">
          <Button variant="primary">Movies</Button>
        </Link>
      </Jumbotron>
      <Card>
        <Card.Header>Packages used in this project</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item action href="https://reactjs.org/">
            React
          </ListGroup.Item>
          <ListGroup.Item action href="https://redux.js.org/">
            Redux
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="https://www.npmjs.com/package/redux-thunk"
          >
            Redux Thunk
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="https://www.npmjs.com/package/redux-logger"
          >
            Redux Logger
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="https://www.npmjs.com/package/react-redux"
          >
            React-Redux
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="https://www.npmjs.com/package/react-router-dom"
          >
            React-Router-Dom
          </ListGroup.Item>
          <ListGroup.Item action href="https://emotion.sh/docs/introduction">
            Emotion
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default HomeView;
