import React from 'react';
import Logic from '../logic/Logic.js';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Chat from '../component/Chat.js';


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
  }
  _addCart(){

  }
  _order()
  {
    alert('order');
  }

  render(){
    return (
      <div >
        { this.state.product ? (
          <div>
            <div >
              <img width='100%' src={this.state.product.image_high}/>
            </div>

            <div style={{padding:5, backgroundColor:'#ffffff',
              position:'fixed', left:0, right:0, bottom:0}}>

              <div>
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

              <div style={{
                display:'flex', flexDirection:'row', width:'100%'}}>
                <IconButton
                  style={{ marginLeft:5}}
                  onClick={this._addCart}
                  >
                  <ShoppingCart/>
                </IconButton>

                <div style={{ marginLeft:5, marginTop:6,width:'85%'}} >
                  <Button onClick={this._order} fullWidth='true' variant='outlined' >
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
