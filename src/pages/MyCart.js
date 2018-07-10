import React from 'react';
import Logic from '../logic/Logic.js';
import queryString from 'querystring';

class Order extends React.Component  {
  constructor()
  {
    super();

  }
  componentDidMount () {
    var params = queryString.parse(this.props.location.search);
    var code = params.code;
    Logic.say();
  }

  render(){
    return (
      <div>
          <h2>
              MyCart
          </h2>
      </div>
    );
  }
}

export default Order;
