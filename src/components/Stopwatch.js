import React, {Component} from 'react';
import { Timer } from './Timer';


var styles = {
    divStyles : {
        width : '200px',
        textAlign : 'center',
        margin : '0 auto'
    },
    btnStyles : {
        color : 'white',
        borderRadius : '10px',
        border : '2px solid white',
        padding : '10px',
        width : '50%',
        backgroundColor : 'red',
        fontSize : '20px'
    }
}

export class Stopwatch extends Component {

    constructor(props){
        super(props);
        this.state = {isRunning : true, buttonText : 'Stop'};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let newIsRunning = this.state.isRunning ? false : true;
        let newButtonText = this.state.isRunning ? 'Start' : 'Stop';
        this.setState({isRunning : newIsRunning , buttonText : newButtonText});
        e.target.style.backgroundColor = newIsRunning ? 'red' : 'green';
    }

    render() {
        return (
            <div style ={styles.divStyles}>
                <Timer startTime={15} isRunning = {this.state.isRunning}/>
                <button style = {styles.btnStyles} onClick = {this.handleClick} >{this.state.buttonText}</button>
            </div>
        );
    };

}
