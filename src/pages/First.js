import React from 'react';
import Logic from '../logic/Logic.js';
import queryString from 'querystring';
import SellerTop from '../component/SellerTop.js'
import ProductItem from '../component/ProductItem.js'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DaumPostcode from 'react-daum-postcode';
import cookie from 'react-cookie';

class First extends React.Component  {
  constructor(props)
  {
    super(props);
    var token = cookie.load('token');
    var address1 = cookie.load('address1');
    var address2 = cookie.load('address2');
    this.state = {
      address1 : address1,
      address2 : address2
    };
  }


  componentDidMount () {
    var currentUrl = window.location.href;
    var url = new URL(currentUrl);
    var productId = url.pathname.replace("/first/",""); ;
    var self = this;
    Logic.selectProduct(productId, function(json){
      self.setState({
        product : json
      });
    });
  }


  _address()
  {

  }

  _order()
  {
    var token = cookie.load('token');
    var address1 = String(this.state.address1).trim();
    var address2 = String(this.state.address1).trim();
    if(this.state.product == null)
    {
      alert('상품이 로딩 중입니다. 잠시만 기다려주세요');
      return;
    }
    if(address1 == '' || address1 == 'undefined')
    {
      alert('주소를 입력해주세요');
      return;
    }
    else {
      cookie.save('address1', address1);
      cookie.save('address2', address2);
      var address = address1 + ' ' + address2;
      Logic.order(token, this.state.product.shop, this.state.product.id, address, function(orderId){
        window.location.href = '/order/' + orderId;
      });
    }
  }

  _handleTextFieldChange1(e) {
      this.setState({
          address1: e.target.value
      });
  }

  _handleTextFieldChange2(e) {
      this.setState({
          address2: e.target.value
      });
  }

  render(){
    return (
      <div style={{padding:0, backgroundColor:'#ffffff'}}>

          <h3>
            다음 상품을 주문하시겠습니까?
          </h3>

          {this.state.product?(
            <div style={{marginTop:'20px', marginLeft:'25%',width:'50%'}}>
              <ProductItem product={this.state.product}/>
            </div>
          ):
          (
            ""
          )}

          {this.state.address1?(
            ""
          ):
          (
            <div style={{marginTop:30}}>
              <h4>
                주소는 한 번만 입력해주시면 됩니다.
              </h4>
            </div>
          )}


          <div style={{marginLeft:20, marginRight:20, marginTop:0}} >
            <TextField id="address1" type="string" fullWidth='true' label="주소를 입력해주세요"
            onChange={this._handleTextFieldChange1.bind(this)}
            value={this.state.address1}/>
          </div>
          <div style={{marginLeft:20, marginRight:20, marginTop:20}} >
            <TextField id="address2" type="string" fullWidth='true' label="상세 주소를 입력해주세요"
            onChange={this._handleTextFieldChange2.bind(this)}
            value={this.state.address2}/>
          </div>

          <div style={{marginLeft:20, marginRight:20, marginTop:40}} >
            <Button onClick={this._order.bind(this)} fullWidth='true' variant='outlined' >
              주문하기
            </Button>
          </div>
      </div>
    );
  }
}

export default First;
