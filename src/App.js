import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/messaging'

import ReactGA from 'react-ga';

// import { Router, Route, Switch } from 'react-router'
import Instagram from 'node-instagram';

import Main from './pages/Main.js';


import Shop from './pages/Shop.js';
import Product from './pages/Product.js';
import Order from './pages/Order.js';
import Login from './pages/Login.js';
import First from './pages/First.js';
import Callback from './pages/Callback.js';


import { Route, BrowserRouter, Switch } from 'react-router-dom';

import $ from 'jquery';

let config = {
    apiKey: "AIzaSyBRkuDWWYp1ZZybWOmanPgh0J47j746Rc8",
    authDomain: "instapay-3aae4.firebaseapp.com",
    databaseURL: "https://instapay-3aae4.firebaseio.com",
    projectId: "instapay-3aae4",
    storageBucket: "instapay-3aae4.appspot.com",
    messagingSenderId: "377294303001",
}

const instagram = new Instagram({
  clientId: 'c99f61f0de284159a05576d4b34005bc',
  clientSecret: 'a50de48865f8436ba1298d420a1f7213',
  accessToken: 'user-access-token',
});

class App extends React.Component {

  constructor(){
    super();
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
      ReactGA.initialize('UA-100015589-2');
    }
    this.state = {
      speed : 101
    };

    // instagram.get('users/self', (err, data) => {
    //   if (err) {
    //     // an error occured
    //     console.log(err);
    //   } else {
    //     console.log(data);
    //   }
    // });


    // const db = firebase.database();
    // const dbRef = db.ref().child('seller').child('muyoungko217').child('userName');
    //
    // db.ref('/seller/muyoungko217/userName').once('value').then(function(snapshot) {
    //   //var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    //   //alert(snapshot.val());
    // });
  }

  componentDidMount () {
    this.state = {
      speed : 25
    };

    console.log("componentDidMount");
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/login" component={Login}/>
            <Route path="/talkin" component={Callback}/>

            <Route path="/product/:product" component={Product}/>
            <Route path="/first" component={First}/>
            <Route path="/order/:order" component={Order}/>
            <Route exact path="/:seller" component={Shop}/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
