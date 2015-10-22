import React, { Component, PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { ItemTypes } from './Constants';

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      order: props.order
    };
  }
};

/**
 * Implements the drag target contract.
 */
const cardTarget = {
  hover(targetProps, monitor) {
    const targetOrder = targetProps.order;
    const sourceProps = monitor.getItem();
    const sourceOrder = sourceProps.order;

    if(sourceOrder !== targetOrder) {
      targetProps.onMove({sourceOrder, targetOrder});
    }
  }
};

@DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
@DropTarget(ItemTypes.CARD, cardTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
export default class Card extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,

    // Injected by React DnD:
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  render() {
    const { isDragging, connectDragSource, connectDropTarget, name, items } = this.props;
    return connectDragSource(connectDropTarget(
      <div className="board" style={{ opacity: isDragging ? 0.5 : 1 }}>
        <h3>{name}</h3>
        {items.map((item, i) =>
          <p key={i}>{item}</p>
        )}
      </div>
    ));
  }
}
