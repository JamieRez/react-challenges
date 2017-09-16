import React, { Component } from 'react';
import { MyTitle } from './components/MyTitle';
import { Stopwatch } from './components/Stopwatch';

var styles = {
    color : 'red'
}

export default class App extends Component {
  render() {
    return (
        <div>
            <MyTitle title="React Timer"/>
            <Stopwatch />
        </div>
    );
  }
}
