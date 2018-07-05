import React from 'react';
import Logic from '../logic/Logic.js';
import queryString from 'querystring';
const JSON = require('JSON');

class Shop extends React.Component  {
  constructor()
  {
    super();
    this.state = {
      data : [],
    };
  }
  componentDidMount () {
    var shop = this.props.location.pathname.substring(1,this.props.location.pathname.length);
    var self = this;
    Logic.selectProductFromShop(shop, function(json){
      console.log(json);
      self.setState({
        data : json
      });
    });
  }

  render(){
    return (
      <div>
          <h2>
              Shop
          </h2>
          <ul>
                {this.state.data.map((contact, i) => {
                    return (<li name={contact.name}
                                        phone={contact.phone}
                                          key={i}
                             />);
                })}
          </ul>
      </div>
    );
  }
}

export default Shop;
