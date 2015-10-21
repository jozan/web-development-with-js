import '../node_modules/normalize.css/normalize.css';
import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router'

import App from './components/App';
import Greeter from './components/Greeter';

const routes = (
  <Router>
    <Route path="/" component={App}>
      <Route path="/hello/:name" component={Greeter} />
    </Route>
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('app')
);
