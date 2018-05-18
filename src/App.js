import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase'
// import { Router, Route, Switch } from 'react-router'
import Instagram from 'node-instagram';
import ProductSelect from './pages/ProductSelect.js';
import OrderList from './pages/OrderList.js';
import Shop from './pages/Shop.js';
import Main from './pages/Main.js';

import { Route, BrowserRouter } from 'react-router-dom';

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

class App extends Component {

  constructor(){
    super();
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.state = {
      speed : 101
    };

    const db = firebase.database();
    const dbRef = db.ref().child('seller').child('muyoungko217').child('userName');

    db.ref('/seller/muyoungko217/userName').once('value').then(function(snapshot) {
      //var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
      //alert(snapshot.val());
    });
  }

  componentDidMount () {
    this.state = {
      speed : 25
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Talk In Shop</h1>
          <Route exact path="/" component={Main}/>
          <Route exact path="/:seller" component={Shop}/>
          <Route path="/seller/list/:seller" component={ProductSelect}/>
          <Route path="/seller/order/:seller" component={OrderList}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
