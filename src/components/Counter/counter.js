import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    }

    handleDecrement = () => {
        if(this.state.count > 0){this.setState({count: this.state.count -1})};
    }

    render() {
        return (
            <div>
                <h3>Contador: {this.state.count}</h3>
                <button onClick={this.handleIncrement}>Incrementar</button>
                <button onClick={this.handleDecrement}>Decrementar</button>
            </div>
        );
    }
}

export default Counter;