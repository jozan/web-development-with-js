import React from 'react';
import api from '../api';

import MainContent from './MainContent';

export default React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      showCounter: false,
      names: []
    }
  },

  componentDidMount: function() {
    api.getTussit().then(data => this.setState({ names: data }));
  },

  render: function() {
    const { names, showCounter, count } = this.state;
    return (
      <div>
        <h1>Lusso</h1>

        {this.props.children ||
          <MainContent
            {...this.state}
            incrementCounter={this.incrementCounter}
            toggleCounter={this.toggleCounter}
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
