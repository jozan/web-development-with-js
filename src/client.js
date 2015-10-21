import '../node_modules/normalize.css/normalize.css';
import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';

import { createHistory } from 'history';
let history = createHistory();

import App from './components/App';
import Index from './components/Index';
import Greeter from './components/Greeter';

const routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/hello/:name" component={Greeter} />
    </Route>
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('app')
);
