import React, { useState, FC, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "./style.css";

interface ILogin {
  props: Object;
}

const Index = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");

  // const navigate = useNavigate();

  // const [loginstate, setloginState] = useState(false);

  // const loginHandle = () => {
  //   setloginState(true);
  // };

  // if (loginstate) {
  //   // return <Navigate to={"/home"} replace />;
  //   const container = document.getElementsByClassName("valueInputContainer");
  //   // container.style.backgroundColor = 'red';
  // }

  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn((prevState) => !prevState);
  };

  return (
    <div className={`container ${isSignIn ? "active" : ""}`} id="container">
      <div className={`form-container sign-up ${isSignIn ? "" : "move-left"}`}>
        <div className="form">
          <h1>Create Account</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </div>
      </div>
      <div className={`form-container sign-in ${isSignIn ? "move-right" : ""}`}>
        <div className="form">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </div>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div
            className={`toggle-panel toggle-left ${isSignIn ? "active" : ""}`}
          >
            <div>
              <h1>Welcome Back</h1>
              <p>Enter your personal details</p>
              <button className="hidden" id="login" onClick={toggleForm}>
                Sign In
              </button>
            </div>
          </div>
          <div
            className={`toggle-panel toggle-right ${isSignIn ? "" : "active"}`}
          >
            <div>
              <h1>Welcome, Friend</h1>
              <p>Create your Account by Entering your Details</p>
              <button className="hidden" id="register" onClick={toggleForm}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
