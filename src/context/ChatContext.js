 import React, {createContext, useState} from 'react';

 export const ChatContext = createContext();

 const ChatContextProvider =(props)=>{
     const [yourName, setYourname] = useState('')
     return(
       <ChatContext.Provider value={{yourName, setYourname}}>
{props.children}
       </ChatContext.Provider>
     )
 }

 export default ChatContextProvider;
