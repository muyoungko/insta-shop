import React from 'react';
import Logic from '../logic/Logic.js';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Chat from '../component/Chat.js';
import cookie from 'react-cookie';

class Product extends React.Component  {
  constructor()
  {
    super();
    this.state = {

    };
  }

  componentDidMount () {
    var currentUrl = window.location.href;
    var url = new URL(currentUrl);
    var productId = url.pathname.replace("/product/",""); ;
    var self = this;
    Logic.selectProduct(productId, function(json){
      self.setState({
        product : json
      });
    });

    Logic.selectSellerInfoByProduct(productId, function(json){
      self.setState({
        shop : json
      });
    });
  }
  _addCart(){
    var token = cookie.load('token');
    if(token == null)
    {
      window.location.href = 'https://www.instagram.com/oauth/authorize/?client_id=c99f61f0de284159a05576d4b34005bc&redirect_uri=http%3A%2F%2Finstapay-3aae4.firebaseapp.com%2Ftalkin%3Ffrom%3Dproduct%3FproductId%3D'+this.state.product.id+'&response_type=token'
    }
    else
    {
      var self = this;
      Logic.addCart(token ,this.state.product.id, function(success){
        if(success)
        {
          alert('장바구니에 추가되었습니다.');
        }
        else {
          alert('이미 장바구니에 있는 상품입니다.');
        }
      });
    }
  }
  _order()
  {
    cookie.save('token', '4787392170');
    var token = cookie.load('token');
    if(token == null)
    {
      window.location.href = 'https://www.instagram.com/oauth/authorize/?client_id=c99f61f0de284159a05576d4b34005bc&redirect_uri=http%3A%2F%2Finstapay-3aae4.firebaseapp.com%2Ftalkin%3Ffrom%3DorderProduct%3FproductId%3D'+this.state.product.id+'&response_type=token'
    }
    else
    {
      window.location.href = '/first/'+this.state.product.id;
    }
  }

  render(){
    return (
      <div >
        { this.state.product ? (
          <div>
            <div >
              <img width='100%' src={this.state.product.image_high}/>
            </div>

            <div style={{padding:0, backgroundColor:'#ffffff',
              position:'fixed', left:0, right:0, bottom:0}}>

              <div style={{padding:5, backgroundColor:'#eeeeee'}}>
                <div style={{display:'inline'}}>
                  Price :
                </div>
                <div style={{color:'#cc0000',display:'inline'}}>
                  <b>{this.state.product.price} </b>
                </div>
                <div style={{display:'block'}}>
                  {this.state.product.caption}
                </div>
              </div>
              <div >
                <Chat product={this.state.product}/>
              </div>

              <div style={{display:'flex', flexDirection:'row', width:'100%'}}>

                <IconButton
                  style={{ marginLeft:5}}
                  onClick={this._addCart.bind(this)}
                  >
                  <ShoppingCart/>
                </IconButton>

                <div style={{ marginLeft:5, marginTop:6,width:'85%'}} >
                  <Button onClick={this._order.bind(this)} fullWidth='true' variant='outlined' >
                    주문하기
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ):(



          <CircularProgress
                      ref={(ref)=>{this.progress = ref;}}
                      style={{
                        position:'absolute',
                        top:'45%',
                        left:'45%',
                        }}
                    />

        )}
      </div>
    );
  }
};




export default Product;
