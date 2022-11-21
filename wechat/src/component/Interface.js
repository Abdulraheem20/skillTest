import React, { useState, useRef } from "react";
import "../styles/interface.css";
import { FiSend } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Interface = () => {
  const date = new Date();
  const [input, setInput] = useState();
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
            <span key={itr.id} className="list">
              {itr.value}
                <CgProfile className="profIcon"/>
            </span>
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
