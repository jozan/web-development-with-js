import '../node_modules/normalize.css/normalize.css';
import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import { VelocityComponent, VelocityTransitionGroup } from 'velocity-react';
import { Router, Route, Link } from 'react-router'
import axios from 'axios';

function getTussit() {
  return axios.get('/api/tussi').then(response => response.data);
};

const HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <Link to={`/hello/${this.props.name}`}>
          Hello {this.props.name}
        </Link>
      </div>
    );
  }
});

const Counterizer = React.createClass({
  render: function() {
    return (
      <div className="counter">
        <div className="counter-number">
          {this.props.count}
        </div>

        <button onClick={this.props.onIncrementCounter}>Click Me!</button>
      </div>
    );
  }
});

const App = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      showCounter: false,
      names: []
    }
  },

  componentDidMount: function() {
    getTussit().then(data => this.setState({ names: data }));
  },

  render: function() {
    const { names, showCounter, count } = this.state;
    console.log(names);

    return (
      <div>
        <h1>Lusso</h1>

        {this.props.children ?
          this.props.children :
          <Content
            names={names}
            count={count}
            incrementCounter={this.incrementCounter}
            toggleCounter={this.toggleCounter}
            showCounter={showCounter}
          />
        }

      </div>
    );
  },

  incrementCounter: function() {
    this.setState({
      count: this.state.count + 1
    });
  },

  toggleCounter: function() {
    this.setState({
      showCounter: !this.state.showCounter
    });
  }
});

const Content = React.createClass({
  render: function() {
    const {
      names,
      showCounter,
      count,
      incrementCounter,
      toggleCounter
    } = this.props;

    return (
      <div>
        {names.map((name, index) =>
          <HelloWorld key={index} name={name} />
        )}

        <button onClick={toggleCounter}>Toggle</button>

        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {showCounter ? <Counterizer
            count={count}
            onIncrementCounter={incrementCounter}
          /> : undefined}
        </VelocityTransitionGroup>
      </div>
    );
  }
});

const Greeter = React.createClass({
  render: function() {
    const { name } = this.props.params;

    return (
      <h2>
        Hello {name}
      </h2>
    );
  }
});

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
