// • Task 2: o Implement a component that logs a message to the console when it updates using componentDidUpdate(). Log another message when the component unmounts using componentWillUnmount().
import React, { Component } from "react";

class LifecycleLogger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Runs after every update
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Component updated! Count changed to ${this.state.count}`);
    }
  }

  // Runs just before the component is removed from the DOM
  componentWillUnmount() {
    console.log("Component is unmounting!");
  }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default LifecycleLogger;
