import '../node_modules/normalize.css/normalize.css';
import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';

import { createHistory } from 'history';
let history = createHistory();

import App from './components/App';
import Board from './components/Board';

const routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Board} />
    </Route>
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('app')
);
