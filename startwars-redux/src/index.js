import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {BrowserRouter as Router} from 'react-router-dom';

import rootReducer from './store/reducers';

import App from './App';

import './index.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

ReactDOM.render(
<Router>
  <Provider store={store}>
    <App />
  </Provider>
</Router>, document.getElementById('root'));
