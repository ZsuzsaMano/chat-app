import React, { createContext, useState } from 'react';
import token from '../config';
export const ChatContext = createContext();

const ChatContextProvider = (props)=> {
    const [yourName, setYourname] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const url = `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=${token}`;
    const getMessages = async() => {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setMessages(data);
      setLoading(false);
    };

    const postMsg = async () => {
      const body = `{ "message": ${JSON.stringify(message)},"author":${JSON.stringify(yourName)} }`;
      console.log(body);
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      };

      const response = await fetch(url, options);
      console.log(response);
      if (response.ok)
      getMessages();
      else {
        console.log('error');
      }
    };

    return (
      <ChatContext.Provider value={{ loading, yourName, setYourname, getMessages, postMsg, messages, message, setMessage }}>
{props.children}
       </ChatContext.Provider>
    );
  };

export default ChatContextProvider;
