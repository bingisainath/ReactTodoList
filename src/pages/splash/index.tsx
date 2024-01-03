import React, { useState } from "react";
import Login from "../loginForm";
import SignUp from "../signUpform";

export default function Index() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginRegister = () => {
    console.log("register and login button handle");

    setIsLogin(!isLogin);
  };

  return (
    <div>
      <div>Welcome to TodoList</div>
      <div>{isLogin ? <Login /> : <SignUp />}</div>
      <div>
        {isLogin ? (
          <div>
            <p>Don't have a account </p>
            <button onClick={handleLoginRegister}>Register</button>
          </div>
        ) : (
          <div>
            <p>Already a user</p>
            <button onClick={handleLoginRegister}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
}
