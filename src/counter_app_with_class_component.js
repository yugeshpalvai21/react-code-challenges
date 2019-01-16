import React from 'react';
import ReactDOM from 'react-dom';

const element = document.getElementById('react-area');

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.Reset = this.Reset.bind(this);
  }

  addOne() {
    this.setState((prevState) => {
      return {counter: prevState.counter + 1 }
    });
  }

  minusOne() {
    this.setState((prevState) => {
      return {counter: prevState.counter - 1}
    });
  }

  Reset() {
    this.setState(
      {counter: 0}
    );
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <hr />
        <h2>Counter: <strong>{this.state.counter}</strong></h2>
        <button onClick={this.addOne}>AddOne</button>
        <button onClick={this.minusOne}>MinusOne</button>
        <button onClick={this.Reset}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, element);
