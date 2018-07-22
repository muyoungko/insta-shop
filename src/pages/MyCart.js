import React from 'react';
import Logic from '../logic/Logic.js';
import UserTop from '../component/UserTop.js';
import ProductRow from '../component/ProductRow.js';
import queryString from 'querystring';
import CircularProgress from '@material-ui/core/CircularProgress';
import cookie from 'react-cookie'
import List from '@material-ui/core/List';

class MyCart extends React.Component  {
  constructor(props)
  {
    super(props);
    this.state = {

    };
  }
  componentDidMount () {
    var token = cookie.load('token');
    var self = this;
    Logic.selectMyCart(token ,function(json){
      self.setState({
        data : json
      });
    });
  }


  render(){
    return (
      <div>
        <div>
              <UserTop shop={this.state.shop}/>

              { this.state.data ? (

                  <div>
                    <h3>
                        내 장바구니
                    </h3>
                    <List container spacing={0} style={{padding: 3}}>
                      { this.state.data.map(currentProduct => (
                          <ProductRow productId={currentProduct}/>
                      ))}
                    </List>
                    <div style={{float:'bottom', align:'center', width:'100%', bottom:0, height:1, backgroundColor:'#eeeeee'}}></div>
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
                      top:'35%',
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

export default MyCart;
