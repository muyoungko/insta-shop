import React from 'react';
import Logic from '../logic/Logic.js';
import queryString from 'querystring';
import TopIcons from '../component/TopIcons.js'
import SellerTop from '../component/SellerTop.js'

class First extends React.Component  {
  constructor(props)
  {
    super(props);

    this.state = {

    };
  }
  componentDidMount () {
    var currentUrl = window.location.href;
    var url = new URL(currentUrl);
    var productId = url.pathname.replace("/product/",""); ;
    var self = this;
    Logic.selectOrderDetail(productId, function(json){
      self.setState({
        order : json
      });
    });
  }

  render(){
    return (
      <div>
          <SellerTop />
          <h2>

          </h2>
      </div>
    );
  }
}

export default First;
