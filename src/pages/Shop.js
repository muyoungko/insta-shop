
import React from 'react';
import Logic from '../logic/Logic.js';
import queryString from 'querystring';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import TopIcons from '../component/TopIcons.js';

const JSON = require('JSON');

class Shop extends React.Component  {
  constructor()
  {
    super();
    this.state = {

    };
  }
  componentDidMount () {
    var shop = this.props.location.pathname.substring(1,this.props.location.pathname.length);
    var self = this;
    Logic.selectSellerInfo(shop, function(json){
      self.setState({
        shop : json
      });
    });

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


                <div style={{padding:0, width:'100%',height:60,
                  //backgroundColor:'#00ff00'
                }}>

                { this.state.shop ? (

                  <div
                  style={{
                    width:'30%',
                    position:'abolute',
                    left:0,
                    width:60,
                    height:60,
                    padding:3,
                    float: 'left'
                  }}>
                      <img
                      style={{
                        width:57,
                        height:57,
                        borderRadius:'50%'
                      }}
                      src={this.state.shop.profile_picture}/>
                  </div>

                ):(
                  <div
                  style={{
                    position:'abolute',
                    backgroundColor:'#dddddd',
                    left:0,
                    width:'57px',
                    height:'57px',
                    margin:3,
                    borderRadius:'50%',
                    float: 'left'
                  }}/>
                )}
                  <div style={{float: 'left',
                        marginLeft:10,
                        marginTop:13,
                        //backgroundColor:'#ffff00',
                        // lineHeight: '60px',
                        fontSize:15,
                        color:'#333',
                        textAlign:'left'}}>
                          {this.state.shop? this.state.shop.username : ""}<br/>
                          <span style={{fontSize:15,color:'#555'}}>쇼핑몰에 오신 것을 환영합니다</span>
                  </div>

                  <div style={{float: 'left',
                        position:'absolute',
                        right:0,
                        marginTop:12,
                        marginRight:10,
                        }}>
                        <TopIcons />
                  </div>


                </div>

              { this.state.data ? (
                  <div>
                      <Grid container spacing={0} style={{padding: 3}}>
                          { this.state.data.map(currentProduct => (
                              <Grid style={{backgroundColor:'#ffffff'}} key={currentProduct.id} item
                              xs={4} sm={2} lg={4} xl={3}>

                                  <div style={{verticalAlign: 'middle', width:'98%', height:'98%', backgroundColor:'#eeeeee'}} >
                                    <img style={{verticalAlign: 'middle', maxWidth:'100%', maxHeight:'100%'}} src={currentProduct.image}/>
                                  </div>
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
