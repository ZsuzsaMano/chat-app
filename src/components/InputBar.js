import React, {useContext} from 'react';
import {ChatContext} from '../context/ChatContext'

const InputBar = () => {
  const{yourName, setYourname} = useContext(ChatContext);
  const getYourname = e =>{
  const yournameValue = document.getElementById('yourname').value;
  const yournameForm = document.querySelector('.yourname');
  e.preventDefault();
  setYourname(yournameValue);
  yournameForm.innerHTML = `<p>${yourName}<p>`;}

  return(
    <div>
    <form action="" className="inputbar">
      <div className="yourname">
        <input type="text"id="yourname" name="yourname" placeholder="Your name"/>
        <button onClick={getYourname}>Save</button>
      </div>
      <div className="message">
        <textarea name="message" id="message" placeholder="Message"></textarea>
        <button>SEND</button>
      </div>
    </form>
    </div>
  )
}

export default InputBar;
