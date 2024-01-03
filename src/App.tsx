// import React, { useState } from "react";
// import "./App.css";
// import {
//   // BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Navigate,
//   useNavigate,
//   redirect,
// } from "react-router-dom";

// import Login from "../src/pages/loginForm";
// import SignUp from "../src/pages/signUpform";
// import Splash from "../src/pages/splash";
// import Home from "../src/pages/home";

// function App() {
//   const navigate = useNavigate();
//   const [loggedIn, setLoggedIn] = useState(false);

//   const redirectToHome = () => {
//     console.log("Redirecting to Home");
//     setLoggedIn(true);
//     navigate('/home');
//     // navigate("/home");
//     // return <Navigate to='/login'></Navigate>;
//     // redirect("/home");
//   };

//   if (loggedIn) {
//     // Redirect to home if already logged in
//     console.log("NAviate");
//     return <Navigate to="/home"/>;
//   }

//   return (
//     <div className="App">
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Splash</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/signup">Signup</Link>
//           </li>
//         </ul>
//       </nav>
//       <h1 onClick={redirectToHome}>Todo List</h1>
//       <Routes>
//         <Route path="/" element={<Splash />} />
//         <Route
//           path="/login"
//           element={<Login name={"sai and tapuu are learning react"} />}
//         />
//         <Route path="/signUp" element={<SignUp />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";

// import Login from "../src/pages/loginForm";
// import SignUp from "../src/pages/signUpform";
import Splash from "../src/pages/splash";
import Home from "../src/pages/home";
import Support from "../src/pages/support";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const navigate = useNavigate();

  // const redirectToHome = () => {
  //   console.log("Redirecting to Home");
  //   setLoggedIn(true);
  //   navigate("/home");
  // };

  // if (loggedIn) {
  //   // Redirect to home if already logged in
  //   return <Navigate to="/home" />;
  // }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;
