import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function Index() {
  const [loginstate, setloginState] = useState(false);

  const logoutHandle = () => {
    setloginState(true);
  };

  if (loginstate) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/support">support</Link>
          </li>
          <li>
            <button onClick={logoutHandle}>logout</button>
          </li>
        </ul>
      </nav>
      <h1>Home</h1>
    </div>
  );
}
