import React, {Component} from 'react';

export class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {count : 0};
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }

    increment(){
        this.setState({count : this.state.count + 1});
    }

    decrement(){
        this.setState({count : this.state.count - 1});
    }

    render() {
        return(
            <div>
                <button onClick={this.increment}>Add 1</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>Subtract 1</button>
            </div>
        )
    }

}
