import React from 'react'
import Logic from '../logic/Logic.js'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import cookie from 'react-cookie'
import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';

class OrderRow extends React.Component  {
  constructor(props)
  {
    super(props);
    this.state = {
      productId : props.productId
    };
  }
  componentDidMount () {
    var self = this;
    Logic.selectProduct(this.state.productId, function(productJson){
      self.setState({
        product : productJson
      });
    });
  }

  _order()
  {
    var token = cookie.load('token');
    if(token == null)
    {
      window.location.href = 'https://www.instagram.com/oauth/authorize/?client_id=c99f61f0de284159a05576d4b34005bc&redirect_uri=http%3A%2F%2Finstapay-3aae4.firebaseapp.com%2Ftalkin%3Ffrom%3DorderProduct%3FproductId%3D'+this.state.product.id+'&response_type=token'
    }
    else
    {
      window.location.href = '/First?productId='+this.state.product.id;
    }
  }

  _clear(){
    var token = cookie.load('token');
    var self = this;
    self.state.product = null;
    Logic.removeCart(token, this.state.productId, function(success){
      self.state.product = null;
    });

  }

  render(){
    return(
      <div>
        aaa
      </div>
    )
  }
}
export default OrderRow;
