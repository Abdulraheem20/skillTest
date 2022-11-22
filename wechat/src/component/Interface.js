import React, { useState, useRef } from "react";
import "../styles/interface.css";
import { FiSend } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Interface = () => {
  const date = new Date();
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const onclick = () => {
    setInput(inputRef.current.value);
    console.log(inputRef.current.value);
  };
  const [chat, setChat] = useState([]);
  const chatList = () => {
    setChat([...chat, { id: chat.length, value: inputRef.current.value }]);
  };
//   const [prof, setProf] = useState(null)
  return (
    <div>
      <div className="container">
        <div className="title">Web Chat</div>
        <p className="date">
          {date.getDate()} {date.getMonth() + 1} {date.getFullYear()}
        </p>
        <p>{input}</p>
        <div className="listContainer">
        
          {chat.map((itr) => (
            <div key={itr.id} className="list">
                <p className="you"><small>You</small></p>
              <div className="contentContainer">
              <span className="content">{itr.value}</span>
                <span className="icon"><CgProfile className="profIcon"/></span>
              </div>
            </div>
          ))}
        </div>
        <form action="">
          <input type="text" className="input" ref={inputRef} />
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              onclick();
              chatList();
              inputRef.current.value = ''
            }}
          >
            <FiSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Interface;
