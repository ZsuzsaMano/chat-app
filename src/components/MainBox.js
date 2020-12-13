import React from 'react';
import ChatBubble from './ChatBubble';
import Loader from './Loader';
import ChatContextProvider from '../context/ChatContext';

const MainBox = () =>{
  setTimeout(()=>{

    const hideLoader = document.getElementById('loader').classList.add('hidden');
}, 5000);

  return(
  <div className="main__box">

<Loader/>
<ChatContextProvider>
<ChatBubble/>
</ChatContextProvider>
  </div>
  )
}

export default MainBox;
