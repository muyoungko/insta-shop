import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Icon from '@material-ui/icons';
import Receipt from '@material-ui/icons/Receipt';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import cookie from 'react-cookie'
import Logic from '../logic/Logic.js';
import { Link } from 'react-router'

class TopIcons extends React.Component  {


  constructor()
  {
    super();
    //cookie.save('loginId', 'muyoungko217');

    this.state = {
      //loginId: cookies.get('loginId') || 'Ben'
    };
  }
  componentDidMount () {
    var token = cookie.load('token');
    if(token != null)
    {
      var self = this;
      Logic.selectMyCart(token, function(cartArray){
        Logic.selectMyOrder(token, function(orderArray){
          self.setState({
            cart : cartArray,
            order : orderArray,
          });
        });
      });
    }
  }
  _handleClickOrder()
  {
    var token = cookie.load('token');
    if(token != null)
    {
        window.location.href = '/myorder';
    }
    else {
        window.location.href = 'https://www.instagram.com/oauth/authorize/?client_id=c99f61f0de284159a05576d4b34005bc&redirect_uri=http%3A%2F%2Finstapay-3aae4.firebaseapp.com%2Ftalkin%3Ffrom%3Dorder&response_type=token'
    }
  }
  _handleClickCart()
  {
    var token = cookie.load('token');
    if(token != null)
    {
        window.location.href = '/mycart';
    }
    else {
        window.location.href = 'https://www.instagram.com/oauth/authorize/?client_id=c99f61f0de284159a05576d4b34005bc&redirect_uri=http%3A%2F%2Finstapay-3aae4.firebaseapp.com%2Ftalkin%3Ffrom%3Dcart&response_type=token'
    }
  }

  render(){
    return(
        <div>
          <IconButton
            onClick={this._handleClickOrder}
          >
            <Receipt/>
            { this.state.order ? (
              <Badge style={{marginBottom:30}} badgeContent={this.state.order.length} color="error" component="string"/>
            ):("")}
          </IconButton>

          <IconButton
            onClick={this._handleClickCart}
            >
            <ShoppingCart/>
            { this.state.cart ? (
              <Badge style={{marginBottom:30}} badgeContent={this.state.cart.length} color="error" component="string"/>
            ):("")}
          </IconButton>
        </div>
    )
  }
}
export default TopIcons;
