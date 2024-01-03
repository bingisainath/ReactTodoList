// import React, { FC, useState } from "react";
// import { Navigate } from "react-router-dom";

// // interface ILogin {
// //   name: String;
// // }

// const Index = () => {
//   const [loginstate, setloginState] = useState(false);

//   const Login = () => {
//     setloginState(true);
//   };

//   if (loginstate) {
//     return <Navigate to={"/home"} replace />;
//   }

//   return (
//     <div>
//       <button onClick={() => Login()}></button>
//     </div>
//   );
// };

// export default Index;

import React, { useState, FC } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface ILogin {
  props: Object;
}

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const [loginstate, setloginState] = useState(false);

  const loginHandle = () => {
    setloginState(true);
  };

  if (loginstate) {
    return <Navigate to={"/home"} replace />;
  }

  return (
    <div>
      <div>
        <div>Login</div>
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
        <input type="button" onClick={loginHandle} value={"Log in"} />
      </div>
    </div>
  );
};

export default Index;
