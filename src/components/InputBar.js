import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const InputBar = () => {
  const{ yourName, setYourname, message, setMessage, postMsg } = useContext(ChatContext);

  const handleOnChangeName = (e)=> {
    setYourname(e.target.value);
  };

  const handleOnChangeMessage = (e)=> {
    setMessage(e.target.value);
  };

  const handlePostMsg = (e)=> {
    e.preventDefault();
    postMsg();
  };

  return (
    <div>
      <form action="" className="inputbar">
        <div className="yourname">
          <input type="text"id="yourname" onChange={handleOnChangeName} name="yourname" value={yourName} placeholder="Your name"/>
        </div>
        <div className="message">
          <textarea name="message" id="message" value={message} placeholder="Message" onChange = {handleOnChangeMessage}></textarea>
          <button onClick= {handlePostMsg}>SEND</button>
        </div>
      </form>
    </div>
  );
};

export default InputBar;
