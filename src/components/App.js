import React, { Component } from 'react';
import { List } from 'immutable';
import api from '../api';

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
    const id = boards.size + 1;
    const boardsOrdered = boards.sortBy(b => b.order);
    const newOrderNumber = boardsOrdered.last().order + 1;

    this.setState({
      boards: boards.push({
        id,
        order: newOrderNumber,
        name: 'New list',
        items: ['new new', 'tussi', 'tussi', 'tussi', 'tussi', 'tussi', 'tussi', 'tussi', 'tussi', 'tussi', 'tussi', 'tussi']
      })
    });
  }

  onMoveCard({sourceOrder, targetOrder}) {
    console.log('source:', sourceOrder, 'target:', targetOrder);
  }

  /*onMoveCard({sourceOrder, targetOrder}) {
    targetOrder += 1;
    console.log('source', sourceOrder, 'target', targetOrder);
    const { boards } = this.state;
    // const boardsOrdered = boards.sortBy(b => b.order);
    // const newOrderNumber = boardsOrdered.last().order + 1;
    let direction;

    if (sourceOrder < targetOrder) {
      direction = 'right';
    } else {
      direction = 'left';
    }

    console.log(direction);

    this.setState({
      boards: boards.map((board, index) => {

        let newOrder;

        switch (direction) {
        case 'right':

          if (board.order <= targetOrder) {
            newOrder = board.order - 1;
          } else {

            if (board.order === sourceOrder) {
              newOrder = targetOrder;
            }
          }

          break;
        case 'left':
          if (board.order >= targetOrder) {
            newOrder = board.order + 1;
          } else {

            if (board.order === sourceOrder) {
              newOrder = targetOrder;
            }
          }
          break;
        }

        return {
          ...board,
          order: newOrder
        }
      })
    });


    // Add item to list
    // Set new state
  }
  */

  render() {
    const { boards } = this.state;
    return (
      <div>
        <header>
          <h1>Trollo</h1>
          <button onClick={::this.addNewBoard}>Add new board</button>
        </header>

        {this.props.children && React.cloneElement(
          this.props.children,
          {
            boards,
            onMoveCard: ::this.onMoveCard
          }
        )}

      </div>
    );
  }
}
