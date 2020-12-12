import React from 'react';
import ChatBubble from './ChatBubble';
import Loader from './Loader';

const MainBox = () =>{
  setTimeout(()=>{

    const hideLoader = document.getElementById('loader').classList.add('hidden');
}, 5000);

  return(
  <div className="main__box">
<Loader/>
<ChatBubble/>
  </div>
  )
}

export default MainBox;
