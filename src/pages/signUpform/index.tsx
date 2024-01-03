import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <div>
        <div>Login</div>
      </div>
      <br />
      <div>
        <input
          value={userName}
          placeholder="Enter your UserName here"
          onChange={(text) => setUserName(text.target.value)}
        />
        <label>{emailError}</label>
      </div>
      <br />
      <div>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(text) => setEmail(text.target.value)}
        />
        <label>{emailError}</label>
      </div>
      <br />
      <div>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(text) => setPassword(text.target.value)}
        />
        <label>{passwordError}</label>
      </div>
      <br />
      <div>
        <input type="button" onClick={onButtonClick} value={"Register"} />
      </div>
    </div>
  );
};

export default Index;
