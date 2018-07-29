import React from 'react';
import Logic from '../logic/Logic.js';
import cookie from 'react-cookie';
import InstaApi from '../instaapi/InstaApi.js';

class Callback extends React.Component  {
  constructor()
  {
    super();
  }

  //http://127.0.0.1:3000/talkin?from=order#access_token=4787392170.c99f61f.c60e924b999542fdbfd25e899204c44c
  componentDidMount () {
    var currentUrl = window.location.href;
    var url = new URL(currentUrl);

    //var param = querystring.parse(this.props.location.search);
    var from = url.searchParams.get('from');
    var index = currentUrl.indexOf('#');
    var token = currentUrl.substring(index+'#access_token='.length,currentUrl.length);

    cookie.save('insta_token', token);
    InstaApi.init('c99f61f0de284159a05576d4b34005bc', 'a50de48865f8436ba1298d420a1f7213', token);
    if(from == 'order')
    {
      /**
        full_name: "고무영", id: "4787392170",
        profile_picture: "https://scontent.cdninstagram.com/vp/dbe35d81549e6…8646542_226387131186395_2345035874279882752_a.jpg",
        username: "muyoungko217"}
      */
      Logic.upsertAndGetUser(function(user,err){
          cookie.save('token', user.id);
          window.location.href = '/myorder';
      });
    }else if(from == 'cart')
    {
      Logic.upsertAndGetUser(function(user,err){
          cookie.save('token', user.id);
          window.location.href = '/mycart';
      });
    }
    //주소 입력 후 주문
    else if(from == 'first')
    {
      Logic.upsertAndGetUser(function(user,err){
          cookie.save('token', user.id);
          var productId = url.searchParams.get('productId');
          window.location.href = '/first/'+productId;
      });
    }
    //다시 상품상세
    else if(from == 'product')
    {
      Logic.upsertAndGetUser(function(user,err){
          cookie.save('token', user.id);
          var productId = url.searchParams.get('productId');
          window.location.href = '/product/'+productId;
      });
    }
    //상품 주문
    else if(from == 'orderProduct')
    {
      Logic.upsertAndGetUser(function(user,err){
          cookie.save('token', user.id);
          var productId = url.searchParams.get('productId');
          window.location.href = '/order/'+productId;
      });
    }
  }

  render(){
    return (
      <div>
        <div style={{height: '80vh'}}>
          <div style={{position: 'relative', top: '40%',  display: 'block'}}>
            <h2>
                Talk In Shop
            </h2>
            <div>
              인증 완료되었습니다
            </div>
            <div>
              잠시만 기다려주세요
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Callback;
