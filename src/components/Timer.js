import React, {Component} from 'react';

export class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {time : props.startTime};
        this.getStyles = this.getStyles.bind(this);
    };

    componentDidMount(){
        setInterval(this.countDown.bind(this), 1000);
    }

    countDown(){
        if(this.state.time > 0 && this.props.isRunning){
            this.setState({time : this.state.time -1});
        }
    };

    getStyles(){
        let styleObj;
        if(this.state.time > 5){
            styleObj = {textAlign : 'center', color : 'black'};
        }else{
            styleObj = {textAlign : 'center', color : 'red'};
        }
        return styleObj
    }

    render() {
        return(
            <h1 style={this.getStyles()}>{this.state.time}</h1>
        );
    }
}

Timer.defaultProps = {
    startTime : 10
}
