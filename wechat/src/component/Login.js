import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/interface.css";

const Login = () => {
  // const [name, setName] = useState('')
  const navigate = useNavigate();
  const inputRef = useRef();
  const [input, setInput] = useState();
  const onclick = () => {
    setInput(inputRef.current.value);
    // console.log(inputRef.current.value);
  };
  return (
    <div className="loginCont">
      <h3 className="chatName">Chat Name</h3>
      <form action="">
        <input type="text" className="userName" />
        <button
          className="userEnter"
          onClick={(e) => {
            e.preventDefault();
            onclick();
            navigate(`/chats`);
            inputRef.current.value = "";
          }}
        >
          Enter
        </button>
      </form>
      <p>{input}</p>
    </div>
  );
};

export default Login;
