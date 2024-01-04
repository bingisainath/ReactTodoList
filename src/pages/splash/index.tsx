import React, { useState } from "react";
import Login from "../Authentication/loginForm";
import SignUp from "../Authentication/signUpform";

import "./style.css";

export default function Index() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginRegister = () => {
    console.log("register and login button handle");

    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      {/* <h1 className="headerText">Welcome to TodoList</h1> */}
      <div className="inputContainer"><Login /></div>
      {/* <div className="QuestionText">
        {isLogin ? (
          <span className="buttonContainer">
            <span>Don't have a account </span>
            <button onClick={handleLoginRegister}>Register</button>
          </span>
        ) : (
          <div>
            <span>Already a user</span>
            <button onClick={handleLoginRegister}>Login</button>
          </div>
        )}
      </div> */}
    </div>
  );
}
