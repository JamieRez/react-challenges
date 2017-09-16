import React, {Component} from 'react';

//styles
var styles = {
    textAlign : 'center'
}

export class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {time : props.startTime};
    };

    componentDidMount(){
        setInterval(this.countDown.bind(this), 1000);
    }

    countDown(){
        if(this.state.time > 0 && this.props.isRunning){
            this.setState({time : this.state.time -1});
        }
    };

    render() {
        return(
            <h1 style={styles}>{this.state.time}</h1>
        );
    }
}

Timer.defaultProps = {
    startTime : 10
}
