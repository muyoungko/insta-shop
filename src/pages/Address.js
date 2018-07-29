import React from 'react';
import Logic from '../logic/Logic.js';
import queryString from 'querystring';
import TopIcons from '../component/TopIcons.js'
import SellerTop from '../component/SellerTop.js'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DaumPostcode from 'react-daum-postcode';


class Address extends React.Component  {
  constructor(props)
  {
    super(props);

    this.state = {

    };
  }

  _order()
  {
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

  handleAddress = (data) => {
      let fullAddress = data.address;
      let extraAddress = '';

      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
        }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
      }

      console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    }


  render(){
    return (
      <div style={{padding:0, backgroundColor:'#ffffff'}}>

          <h3>
            다음과 같이 주문하시겠습니까?
          </h3>

          <div>
            <TextField id="address1" type="string"  />
            <TextField id="address2" type="string"  />
            <Button style={{ marginTop:30, marginRight:5}} variant='outlined' >
              주소찾기
            </Button>
          </div>

          <DaumPostcode
                  onComplete={this.handleAddress}
                />

          <div style={{position:'fixed', left:10, right:10, bottom:10}} >
            <Button onClick={this._order.bind(this)} fullWidth='true' variant='outlined' >
              주문하기
            </Button>
          </div>
      </div>
    );
  }
}

export default Address;
