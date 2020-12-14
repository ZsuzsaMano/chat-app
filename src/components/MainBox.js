import React, { useEffect, useState, useContext, useRef } from 'react';
import ChatBubble from './ChatBubble';
import Loader from './Loader';
import ChatContextProvider from '../context/ChatContext';
import { ChatContext } from '../context/ChatContext';
import token from '../config';

const MainBox = () => {
  const{ messages, getMessages, loading } = useContext(ChatContext);

  useEffect(()=> {
    getMessages();
  }, []);
  console.log(messages);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
  <div className="main__box">

{loading && <Loader/>}
{messages.map(message =>
<ChatBubble
  message= {message}
  key = {message._id}/>)}
  <div ref={messagesEndRef} ></div>
  </div>
  );
};

export default MainBox;
