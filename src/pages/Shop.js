
import React from 'react';
import Logic from '../logic/Logic.js';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import TopIcons from '../component/TopIcons.js';
import ProductItem from '../component/ProductItem.js'
import SellerTop from '../component/SellerTop.js'

const JSON = require('JSON');

class Shop extends React.Component  {
  constructor(props)
  {
    super(props);
    var shop = this.props.location.pathname.substring(1,this.props.location.pathname.length);
    this.state = {
      shop : shop
    };
  }
  componentDidMount () {

    var self = this;
    var shop = this.props.location.pathname.substring(1,this.props.location.pathname.length);
    Logic.selectProductFromShop(shop, function(json){
      self.setState({
        data : json
      });
    });
  }

  render(){
    return (
      <div>
        <div>
              <SellerTop shop={this.state.shop}/>

              { this.state.data ? (

                  <div>
                      <Grid container spacing={0} style={{padding: 3}}>
                          { this.state.data.map(currentProduct => (
                              <Grid stle={{backgroundColor:'#ffffff'}} key={currentProduct.id} item
                              xs={4} sm={2} lg={4} xl={3}>
                                  <ProductItem product={currentProduct}/>
                              </Grid>
                          ))}
                      </Grid>
                  </div>
              ) :
              (
                <div style={{position:'absolute',
                  width:'100%',
                  height:'100%',
                  }}>
                  <CircularProgress
                    ref={(ref)=>{this.progress = ref;}}
                    style={{
                      position:'absolute',
                      top:'45%',
                      left:'45%',
                      }}
                  />
                </div>
              )
             }
          </div>

      </div>



    );
  }
}



export default Shop;
