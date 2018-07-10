import React from 'react'
import { Link } from 'react-router-dom';

class ProductItem extends React.Component  {

  render(){
    return(
      <Link to={'/product/'+this.props.product.id} >
        <div style={{verticalAlign: 'middle', width:'98%', height:'98%', backgroundColor:'#eeeeee'}} >
        <img style={{verticalAlign: 'middle', maxWidth:'100%', maxHeight:'100%'}} src={this.props.product.image}/>
        </div>
      </Link>
    )
  }
}
export default ProductItem;
