import React from 'react';
import Logic from '../logic/Logic.js';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import TopIcons from '../component/TopIcons.js';
import ProductItem from '../component/ProductItem.js'
import cookie from 'react-cookie'

class UserTop extends React.Component  {


  constructor()
  {
    super();
    this.state = {
    };
  }
  componentDidMount () {
    var token = cookie.load('token');

    var self = this;
    Logic.selectUserInfo(token, function(json){
      self.setState({
        user : json
      });
    });
  }


  render(){
    return(
      <div style={{paddingLeft:3, paddingTop:5,  width:'100%',height:60,
        //backgroundColor:'#00ff00'
      }}>

      { this.state.user ? (

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
            src={this.state.user.profile_picture}/>
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
                {this.state.user? this.state.user.username : ""}

                {this.state.user? (
                  <span style={{fontSize:15,color:'#555'}}>
                    <br/>
                    {this.state.user.full_name}님 반갑습니다
                  </span>
                ) : ""}
        </div>

        <div style={{float: 'left',
              position:'absolute',
              right:0,
              marginTop:8,
              marginRight:10,
              }}>
              <TopIcons />
        </div>

      </div>
    )
  }
}
export default UserTop;
