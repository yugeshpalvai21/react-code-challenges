import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));