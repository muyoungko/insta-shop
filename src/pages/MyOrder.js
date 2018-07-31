import React from 'react';
import Logic from '../logic/Logic.js';
import UserTop from '../component/UserTop.js';
import OrderRow from '../component/OrderRow.js';
import queryString from 'querystring';
import CircularProgress from '@material-ui/core/CircularProgress';
import cookie from 'react-cookie'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

class MyOrder extends React.Component  {
  constructor(props)
  {
    super(props);
    this.state = {

    };
  }
  componentDidMount () {
    cookie.save('token', '4787392170');
    var token = cookie.load('token');
    var self = this;
    Logic.selectMyOrder(token ,function(json){
      var arr = []
      if(json!= null)
      {
        Object.keys(json).forEach(function(key) {
          arr.push(json[key]);
        });
      }
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
                    <Divider/>
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


             { this.state.data && this.state.data.length == 0 ? (
                 <h4>
                     주문 내역이 없습니다.
                 </h4>
               ):(
                 ""
               )
             }
          </div>

      </div>
    );
  }
}

export default MyOrder;
