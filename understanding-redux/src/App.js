import React from 'react';
import {Route} from 'react-router-dom';

import Auth from './utils/auth'

import './App.css';

import Container1 from './containers/Container1'
import Callback from './functional/Callback';

const auth = new Auth();

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <Route exact path='/' render={props => <Container1 {...props} auth={auth} />} />
      <Route exact path="/callback" render={props => <Callback {...props} auth={auth} />} />
    </div>
  );
}

export default App;
