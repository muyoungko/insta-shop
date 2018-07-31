import React from 'react';
import Logic from '../logic/Logic.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/icons';
import Receipt from '@material-ui/icons/Receipt';
import Message from '@material-ui/icons/Message';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import '../component/chat.css';


const MESSAGES = [
  {user:'seller', text:'skjdfalksjdflk sdkjf jsdf lskjd flksjd flsj fklsjd fsjflks okay'},
  {text:'sudo make me a sandwich'},
  {user:'seller', text:'what? make it yourself'},
  {text:'make me a sandwich\nsdfjsldkjflj'},
  {user:'seller', text:'skjdfalksjdflk sdkjf jsdf lskjd flksjd flsj fklsjd fsjflks okay'},
  {text:'sudo make me a sandwich'},
  {user:'seller', text:'what? make it yourself'},
  {text:'make me a sandwich\nsdfjsldkjflj'},
  {user:'seller', text:'skjdfalksjdflk sdkjf jsdf lskjd flksjd flsj fklsjd fsjflks okay'},
  {text:'sudo make me a sandwich'},
  {user:'seller', text:'what? make it yourself'},
  {text:'make me a sandwich\nsdfjsldkjflj'},
];

class Chat extends React.Component  {

  constructor()
  {
    super();
    this.state = {
    };
  }
  componentDidMount () {

  }

  render(){
    return(
        <div style={{height:200}}>
          <div className="chatframe" >
              <ul style={{margin:0, padding:0}}>

              {MESSAGES.map((chat, i) => {
                  const seller = 0;//i % 2;
                  const odd = i % 2;
                  return (
                      <li className="chatli">
                          {odd?(
                              <img className="chatfaceleft" src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                            ):(
                              <img className="chatfaceright" src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                            )}

                            {odd?(
                                <p className="chatmessage chatmessageleft">{chat.text}</p>
                              ):(
                                <p className="chatmessage chatmessageright">{chat.text}</p>
                              )}

                      </li>
                  )})}

             </ul>
          </div>
          <div style={{padding:10, width:'100%'}}>
            <Input style={{width:'85%'}} placeholder='궁금하신점 문의해주세요^^'/>
            <IconButton
              style={{ marginRight:5, float:'right'}}
              //onClick={this._handleClickCart}
              >
              <Message/>
            </IconButton>
          </div>

        </div>
    )
  }
}
export default Chat;
