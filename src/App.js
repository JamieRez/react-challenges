import React, { Component } from 'react';
import { MyTitle } from './components/MyTitle';
import { Stopwatch } from './components/Stopwatch';
import { UserList } from './components/UserList';

//Users
function User(name, team, id) {
    this.name = name;
    this.team = team;
    this.id = id;
}
var userJames = new User("James", "Awesome", 12037);
var userBrad = new User("Brad", "Superhero", 43902);
var userMitchell = new User("Mitchell", "Badass Instructor", 58402);
var userObjArr = [userJames, userBrad, userMitchell];

//Styles
var styles = {
    color : 'red'
}

export default class App extends Component {
  render() {
    return (
        <div>
            <MyTitle title="React Timer"/>
            <Stopwatch />
            <UserList list = {userObjArr} />
        </div>
    );
  }
}
