import React from 'react'
import Logic from '../logic/Logic.js'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import cookie from 'react-cookie'
import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';
import ProductItem from '../component/ProductItem.js'

class ProductRow extends React.Component  {
  constructor(props)
  {
    super(props);
    this.state = {
      productId : props.productId
    };
  }
  componentDidMount () {
    var self = this;
    Logic.selectProduct(this.state.productId, function(productJson){
      self.setState({
        product : productJson
      });
    });
  }

  _order()
  {
    var token = cookie.load('token');
    if(token == null)
    {
      window.location.href = 'https://www.instagram.com/oauth/authorize/?client_id=c99f61f0de284159a05576d4b34005bc&redirect_uri=http%3A%2F%2Finstapay-3aae4.firebaseapp.com%2Ftalkin%3Ffrom%3DorderProduct%3FproductId%3D'+this.state.product.id+'&response_type=token'
    }
    else
    {
      window.location.href = '/First?productId='+this.state.product.id;
    }
  }

  _clear(){
    var token = cookie.load('token');
    var self = this;
    self.state.product = null;
    Logic.removeCart(token, this.state.productId, function(success){
      self.state.product = null;
    });

  }

  render(){
    return(
      <Link to={'/product/'+this.props.productId} >
        {this.state.product?(
          <div style={{ width:'100%', height:130, position:'relative'}} >
            <div style={{width:'130px', height:'130px', float:'left'}}>
              <ProductItem product={this.state.product}/>
            </div>
            <div style={{float:'left', marginLeft:20, marginTop:12 }}>
              <div style={{float:'top', textAlign:'left', fontSize:'20px', color:'#333333'}}>
                {this.state.product.caption}
              </div>

              <Link to={this.state.product.shop} >
                <div style={{ marginTop:12}}>
                  <img
                    style={{
                      width:23,
                      height:23,
                      marginRight:5,
                      marginTop:0,
                      float:'left',
                      borderRadius:'50%'
                    }}
                    src={this.state.product.shop_profile_picture}
                  />
                  <div style={{float:'left', marginRight:10, marginTop:5,
                        fontSize:'13px',
                        color:'#aaaaaa' }}>
                    <div>
                      {this.state.product.shop}
                    </div>
                  </div>
                </div>
              </Link>
            </div>


            <Link to={'#'} >
              <IconButton
                style={{float:'right', marginTop:5, marginRight:10}}
                onClick={this._clear.bind(this)}
                >
                <Clear/>
              </IconButton>

            </Link>


            <Link to={'/first/'+this.props.productId} >
              <Button style={{float:'right', marginTop:20, marginRight:15}} variant='outlined' >
                주문
              </Button>
            </Link>



            <div style={{ width:'100%', height:1, backgroundColor:'#eeeeee'}}></div>
          </div>
        ):(
          ""
        )}
      </Link>
    )
  }
}
export default ProductRow;
