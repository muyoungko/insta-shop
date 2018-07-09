import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Icon from '@material-ui/icons';
import Receipt from '@material-ui/icons/Receipt';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

class TopIcons extends React.Component  {
  constructor()
  {
    super();
    this.state = {
    };
  }
  componentDidMount () {
    //var loginId = 
    // var self = this;
  }

  render(){
    return(
      <div>
        <IconButton >
          <Receipt/>
          <Badge style={{marginBottom:30}} badgeContent='1' color="error" component="string"/>
        </IconButton>

        <IconButton >
          <ShoppingCart/>
          <Badge style={{marginBottom:30}} badgeContent='1' color="error" component="string"/>
        </IconButton>
      </div>
    )
  }
}
export default TopIcons;
