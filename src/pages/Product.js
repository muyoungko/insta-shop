import React from 'react';
import Logic from '../logic/Logic.js';
import CircularProgress from '@material-ui/core/CircularProgress';

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

  render(){
    return (
      <div>
        { this.state.product ? (
          <img src={this.state.product.image_high}/>
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
