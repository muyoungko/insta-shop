import React from 'react'
import { Link } from 'react-router-dom';

class ProductItem extends React.Component  {

  render(){
    return(
      <Link to={'/product/'+this.props.product.id} >
        <div style={{position:'relative', width:'98%', height:'98%', backgroundColor:'#eeeeee'}} >
          <img style={{ maxWidth:'100%', maxHeight:'100%'}} src={this.props.product.image}/>
          {this.props.product.price?(
            <div style={{position:'absolute', marginBottom:1, bottom:0, right:0, backgroundColor:'#000000', color:'#ffffff',
            paddingLeft:2, paddingRight:2}}>{this.props.product.price}</div>
          ):(
            ""
          )}

        </div>

      </Link>
    )
  }
}
export default ProductItem;
