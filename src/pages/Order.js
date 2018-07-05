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
              주문 인스타
          </h2>
      </div>
    );
  }
}

export default Order;
