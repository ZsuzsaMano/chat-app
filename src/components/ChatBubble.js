import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import token from '../config';

const ChatBubble = ({ message }) => {

  const d = new Date().toUTCString();
  return (
  <div className="chatbubble">
  <p className="chatbubble__name">{message.author}</p>
  <p className="chatbubble_text">{message.message}</p>
  <p className="chatbubble__date">{d}</p>
  </div>
  );
};

export default ChatBubble;
