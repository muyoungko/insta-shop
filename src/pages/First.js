import React from 'react';
import Logic from '../logic/Logic.js';
import queryString from 'querystring';
import TopIcons from '../component/TopIcons.js'
import SellerTop from '../component/SellerTop.js'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
          <h3>
            다음과 같이 주문하시겠습니까?
          </h3>

          <TextField id="time" type="string"  />

          <Button style={{float:'right', marginTop:30, marginRight:5}} variant='outlined' >
            주소찾기
          </Button>
      </div>
    );
  }
}

export default First;
