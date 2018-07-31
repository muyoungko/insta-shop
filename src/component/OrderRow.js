import React from 'react'
import Logic from '../logic/Logic.js'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import cookie from 'react-cookie'
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Clear from '@material-ui/icons/Clear';
import ProductItem from '../component/ProductItem.js';

class OrderRow extends React.Component  {
  constructor(props)
  {
    super(props);
    this.state = {
      order : props.order
    };
}
  componentDidMount () {
    var self = this;
    Logic.selectProduct(this.state.order.productId, function(productJson){
      self.setState({
        product : productJson
      });
    });
  }
  _process()
  {

  }
  _process_pay()
  {
    
  }

  render(){
    return(
      <div>
        <Divider/>
        <div style={{width:'100%', height:'130px'}}>
          {this.state.product?(
              <div style={{width:'130px', height:'130px', float:'left'}}>
                <ProductItem product={this.state.product}/>
              </div>
          ):(
            ""
          )}
          <div style={{float:'left', marginTop:10, marginLeft:10, fontSize:'13px'}}>
            <div>
              주문상태 : {Logic.getOrderStateTitle(this.state.order.state)}
            </div>
            <div>
              {Logic.getOrderStateDesc(this.state.order.state)}
            </div>
            <div>
              계좌 : {this.state.order.account}
            </div>
            <div>
              배송지 : {this.state.order.address}
            </div>
            <div style={{marginRight:10, marginTop:20}} >
              <div style={{float:'left', marginLeft:10}}>
                <Button
                  onClick={this._process_pay.bind(this)} fullWidth='true' variant='outlined' >
                  입금했어요
                </Button>
              </div>
              <div style={{float:'left', marginLeft:10}}>
                <Button
                  onClick={this._process.bind(this)} fullWidth='true' variant='outlined' >
                    주문취소
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default OrderRow;
