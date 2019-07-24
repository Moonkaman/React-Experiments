import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import rootReducer from './store/reducers';
import {createStore} from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';

let store = createStore(rootReducer)

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));