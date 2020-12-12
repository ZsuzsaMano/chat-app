import React from 'react';
import ChatBubble from './ChatBubble';
import Loader from './Loader';

const MainBox = () =>{
  return(
  <div className="main__box">
<Loader/>
<ChatBubble/>
<ChatBubble/>

  </div>
  )
}

export default MainBox;
