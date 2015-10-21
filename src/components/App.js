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

  addNewBoard(e) {
    const { boards } = this.state;
    this.setState({
      boards: boards.push({
        name: 'New list',
        items: ['new new', 'tussi']
      })
    });
  }

  render() {
    const { boards } = this.state;
    return (
      <div>
        <h1>Trollo</h1>
        <button onClick={::this.addNewBoard}>Add new board</button>

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
