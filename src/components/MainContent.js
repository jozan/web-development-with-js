import React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

import HelloWorld from './HelloWorld';
import Counterizer from './Counterizer';

export default React.createClass({
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

        <VelocityTransitionGroup enter={{animation: 'fadeIn'}} leave={{animation: 'fadeOut'}}>
          {showCounter ? <Counterizer
            count={count}
            onIncrementCounter={incrementCounter}
          /> : undefined}
        </VelocityTransitionGroup>

      </div>
    );
  }
});
