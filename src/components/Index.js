import React, { Component } from 'react';

export default class Index extends React.Component {
  render() {
    const { boards } = this.props;

    return (
      <div className="board-container">
        {boards.map((board, i) =>
          <div className="board" key={i}>
            <h3>{board.name}</h3>
            {board.items.map((item, i) =>
              <p key={i}>{item}</p>
            )}
          </div>
        )}
      </div>
    );
  }

}
