import React from 'react';
import Logic from '../logic/Logic.js';
import queryString from 'querystring';
import TopIcons from '../component/TopIcons.js'

class Order extends React.Component  {
  constructor(props)
  {
    super(props);

    this.state = {

    };
  }
  componentDidMount () {
    var currentUrl = window.location.href;
    var url = new URL(currentUrl);
    var productId = url.pathname.replace("/product/",""); ;
    var self = this;
    Logic.selectOrderDetail(productId, function(json){
      self.setState({
        order : json
      });
    });
  }

  render(){
    return (
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
                {this.state.shop? this.state.shop.username : ""}
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
          <h2>
              주문이 완료되었습니다.
          </h2>
      </div>
    );
  }
}

export default Order;
