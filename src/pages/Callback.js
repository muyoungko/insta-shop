import React from 'react';
import queryString from 'querystring';

class Callback extends React.Component  {
  constructor()
  {
    super();

  }
  componentDidMount () {
    var params = queryString.parse(this.props.location.search);
    var code = params.code;


  }

  render(){
    return (
      <div>
          인증 완료되었습니다
      </div>
    );
  }
}

export default Callback;
