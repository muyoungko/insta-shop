import React from 'react';
import querystring from 'querystring'
class Callback extends React.Component  {
  constructor()
  {
    super();

  }
  componentDidMount () {
    //var param = querystring.parse(this.props.location.query);
    alert(this.props.location.query);

  }

  render(){
    return (
      <div>
        <h2>
            Talk In Shop
        </h2>
        <div style={{height: '80vh'}}>
          <div style={{position: 'relative', top: '40%',  display: 'block'}}>
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
