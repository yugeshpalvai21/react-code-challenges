import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
    }

    addOne() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        });
    }
    minusOne() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        });
    }
    reset() {
        this.setState(() => {
            return {
                counter: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.addOne}>Add one (+1)</button>
                <button onClick={this.minusOne}>Minus One (-1)</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));