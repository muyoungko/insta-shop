import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase'


class App extends Component {

  constructor(){
    super();

    this.state = {
      speed : 101
    };

    const db = firebase.database();
    const dbRef = db.ref().child('react');
    dbRef.setValue
    dbRef.on('value', snapshot => {
      speed : 10333;
    });

    // var newDbRef = dbRef.child('sdfsdf').push();
    // newDbRef.setValue('sdfsdfsdf');


  }

  componentDidMount () {
    this.state = {
      speed : 25
    };
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.speed}</h1>
      </div>
    );
  }
}

export default App;
