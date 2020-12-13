import React,{useContext} from 'react';
import {ChatContext} from '../context/ChatContext'


const ChatBubble = () =>{
  const{yourName, setYourname} = useContext(ChatContext);
  const d = new Date().toUTCString();
  return(
  <div className="chatbubble mymessage">
  <p className="chatbubble__name">{yourName}</p>
  <p className="chatbubble_text">Lorem ipsum dolor sit amet.</p>
  <p className="chatbubble__date">{d}</p>
  </div>
  )
}

export default ChatBubble;
