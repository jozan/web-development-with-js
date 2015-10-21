import '../node_modules/normalize.css/normalize.css';
import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import { VelocityComponent, VelocityTransitionGroup } from 'velocity-react';
import axios from 'axios';

function getTussit() {
  return axios.get('/api/tussi').then(response => response.data);
};

const HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        Hello {this.props.name}
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
    const names = this.state.names;

    return (
      <div>
        <h1>Lusso</h1>

        {names.map((name, index) =>
          <HelloWorld key={index} name={name} />
        )}

        <button onClick={this.toggleCounter}>Toggle</button>

        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {this.state.showCounter ? <Counterizer
            count={this.state.count}
            onIncrementCounter={this.incrementCounter}
          /> : undefined}
        </VelocityTransitionGroup>

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

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
