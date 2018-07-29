import React from 'react';
import Logic from '../logic/Logic.js';
import queryString from 'querystring';
import SellerTop from '../component/SellerTop.js'

class Order extends React.Component  {
  constructor(props)
  {
    super(props);

    this.state = {

    };
  }
  componentDidMount () {
    var currentUrl = window.location.href;
    var url = new URL(currentUrl);
    var orderId = url.pathname.replace("/order/",""); ;
    var self = this;
    Logic.selectOrderDetail(orderId, function(json){
      self.setState({
        order : json
      });
    });
  }

  render(){
    return (
      <div>
        {this.state.order?
          (
            <SellerTop shop={this.state.order.shop}/>
          ):
          (
            ""
          )

        }
        <h2 style={{marginTop:'100px'}}>
            주문이 완료되었습니다.
        </h2>
      </div>
    );
  }
}

export default Order;
