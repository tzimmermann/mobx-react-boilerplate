import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class MobxCounter extends Component {
  render() {
    return (
      <div>
        <p>
          Clicked: {this.props.appState.counter} times
          {' '}
          <button onClick={this.onIncrement}>
            +
          </button>
          {' '}
          <button onClick={this.onDecrement}>
            -
          </button>
          {' '}
          <button onClick={this.incrementIfOdd}>
            Increment if odd
          </button>
          {' '}
          <button onClick={this.incrementAsync}>
            Increment async
          </button>
        </p>
        <DevTools />
      </div>
    );
  }

  onIncrement = () => {
    this.props.appState.incrementCounter();
  }

  onDecrement = () => {
    this.props.appState.decrementCounter();
  }

  incrementIfOdd = () => {
    if (this.props.appState.counter % 2 !== 0) {
      this.onIncrement();
    }
  }

  incrementAsync = () => {
    setTimeout(this.onIncrement, 1000)
  }

};

export default MobxCounter;
