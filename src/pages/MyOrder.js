import React from 'react';
import Logic from '../logic/Logic.js';
import UserTop from '../component/UserTop.js';
import OrderRow from '../component/OrderRow.js';
import queryString from 'querystring';
import CircularProgress from '@material-ui/core/CircularProgress';
import cookie from 'react-cookie'
import List from '@material-ui/core/List';

class MyOrder extends React.Component  {
  constructor(props)
  {
    super(props);
    this.state = {

    };
  }
  componentDidMount () {
    var token = cookie.load('token');
    var self = this;
    Logic.selectMyOrder(token ,function(json){
      var arr = []
      Object.keys(json).forEach(function(key) {
        arr.push(json[key]);
      });

      self.setState({
        data : arr
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
                        내 주문
                    </h3>
                    <List container spacing={0} style={{padding: 3}}>

                      { this.state.data.map(order => (
                          <OrderRow order={order}/>
                      ))}
                    </List>
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

export default MyOrder;
