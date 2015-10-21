import React, { Component } from 'react';
import { List } from 'immutable';
import api from '../api';

import MainContent from './MainContent';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      boards: List()
    }
  }

  componentDidMount() {
    api.getBoards().then(data => this.setState({ boards: data }));
  }

  render() {
    const { boards } = this.state;
    return (
      <div>
        <h1>Trollo</h1>

        {this.props.children && React.cloneElement(
          this.props.children,
          {
            boards
          }
        )}

      </div>
    );
  }
}
