import React, {Component} from "react";


export default class Counter extends Component {
    state = {
      counter: 0,
    };
   
    onIncrement = () => {
      this.setState(state => ({ counter: state.counter + 1 }));
    }
   
    onDecrement = () => {
      this.setState(state => ({ counter: state.counter - 1 }));
    }
   
    render() {
      return (
        <div>
          <p>{this.state.counter}</p>
   
          <button
            onClick={this.onIncrement}
            type="button"
          >
            Increment
          </button>
          <button
            onClick={this.onDecrement}
            type="button"
          >
            Decrement
          </button>
        </div>
      );
    }
  }