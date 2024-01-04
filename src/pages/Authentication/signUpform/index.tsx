import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";

// import "./signUpstyle.css";

interface ISignUp {
  props: Object;
}

const Index = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const onButtonClick = () => {
    // You'll update this function later...
  };

  return (
    <div id="container">
      <div className="registerTitle">
        <div id="RegisterText">Register</div>
      </div>
      <br />
      <div className="valueInputContainer">
        <div className="userNameInputContanier">
          <input
            value={userName}
            placeholder="Enter your UserName here"
            onChange={(text) => setUserName(text.target.value)}
            className="userNameInput"
          />
          <label>{emailError}</label>
        </div>
        <br />
        <div className="emailInputContanier">
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(text) => setEmail(text.target.value)}
            className="emailInput"
          />
          <label>{emailError}</label>
        </div>
        <br />
        <div className="passwordInputContanier">
          <input
            value={password}
            placeholder="Enter your password here"
            onChange={(text) => setPassword(text.target.value)}
            className="passwordInput"
          />
          <label>{passwordError}</label>
        </div>
      </div>
      <br />
      <div className="buttonContainer">
        <input
          type="button"
          onClick={onButtonClick}
          value={"Register"}
          className="button"
        />
      </div>
    </div>
  );
};

export default Index;
