import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Card from './Card';

@DragDropContext(HTML5Backend)
export default class Board extends React.Component {
  render() {
    const { boards, onMoveCard } = this.props;
    console.log(boards.sortBy(b => b.order).toJS());

    return (
      <div className="board-container">
        {boards.sortBy(b => b.order).map(board =>
          <Card
            key={board.id}
            id={board.id}
            order={board.order}
            name={board.name}
            items={board.items}
            onMove={onMoveCard}
          />
        )}
      </div>
    );
  }

}
