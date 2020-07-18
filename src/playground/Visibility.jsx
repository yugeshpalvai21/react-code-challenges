import React from 'react';
import ReactDOM from 'react-dom';

class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.changeVisibility = this.changeVisibility.bind(this);
    }

    changeVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.changeVisibility}>{ this.state.visible ? 'Hide Details' : 'Show Details' }</button>
                { this.state.visible && <p>You're eligible to see this message</p> }
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));