import React from 'react';

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

export default Counterizer;
