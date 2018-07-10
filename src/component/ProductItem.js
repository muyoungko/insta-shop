import React from 'react'

class ProductItem extends React.Component  {

  _handleClickProduct()
  {
      alert('click');
  }

  render(){
    return(
      <div onClick={this._handleClickProduct} style={{verticalAlign: 'middle', width:'98%', height:'98%', backgroundColor:'#eeeeee'}} >
        <img style={{verticalAlign: 'middle', maxWidth:'100%', maxHeight:'100%'}} src={this.props.product.image}/>
      </div>
    )
  }
}
export default ProductItem;
