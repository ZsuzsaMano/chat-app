import React from 'react';

const ChatBubble = () =>{
  const d = new Date().toUTCString();
  return(
  <div className="chatbubble">
  <p className="chatbubble__name">Name</p>
  <p className="chatbubble_text">Lorem ipsum dolor sit amet.</p>
  <p className="chatbubble__date">{d}</p>
  </div>
  )
}

export default ChatBubble;
